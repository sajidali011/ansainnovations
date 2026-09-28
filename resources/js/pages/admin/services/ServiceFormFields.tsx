import { useState } from 'react';
import { router } from '@inertiajs/react';
import { ServiceImageType } from '@/types/service';

interface Props {
    data: any;
    setData: (key: any, value: any) => void;
    errors: Record<string, string>;
    /** Only passed in Edit mode — images already saved in the database */
    existingImages?: ServiceImageType[];
}

export default function ServiceFormFields({ data, setData, errors, existingImages = [] }: Props) {
    // ---------- generic repeater helpers (used by offerings / tools / process_steps / faqs) ----------
    const addRow = (field: string, empty: object) => {
        setData(field, [...(data[field] ?? []), empty]);
    };
    const updateRow = (field: string, index: number, key: string, value: string) => {
        const rows = [...(data[field] ?? [])];
        rows[index] = { ...rows[index], [key]: value };
        setData(field, rows);
    };
    const removeRow = (field: string, index: number) => {
        const rows = [...(data[field] ?? [])];
        rows.splice(index, 1);
        setData(field, rows);
    };

    // ---------- tags (simple string list) ----------
    const [tagInput, setTagInput] = useState('');
    const addTag = () => {
        if (!tagInput.trim()) return;
        setData('tags', [...(data.tags ?? []), tagInput.trim()]);
        setTagInput('');
    };
    const removeTag = (index: number) => {
        const rows = [...(data.tags ?? [])];
        rows.splice(index, 1);
        setData('tags', rows);
    };

    // ---------- new gallery images (not yet uploaded) ----------
    const addGalleryImage = (file: File) => {
        setData('gallery_images', [...(data.gallery_images ?? []), file]);
        setData('gallery_alt_texts', [...(data.gallery_alt_texts ?? []), '']);
        setData('gallery_tags', [...(data.gallery_tags ?? []), '']);
    };
    const updateGalleryMeta = (index: number, key: 'gallery_alt_texts' | 'gallery_tags', value: string) => {
        const rows = [...(data[key] ?? [])];
        rows[index] = value;
        setData(key, rows);
    };
    const removeGalleryImage = (index: number) => {
        const images = [...(data.gallery_images ?? [])];
        const alts = [...(data.gallery_alt_texts ?? [])];
        const tags = [...(data.gallery_tags ?? [])];
        images.splice(index, 1);
        alts.splice(index, 1);
        tags.splice(index, 1);
        setData('gallery_images', images);
        setData('gallery_alt_texts', alts);
        setData('gallery_tags', tags);
    };

    // ---------- existing (already saved) gallery images — edit mode only ----------
    const toggleExistingImage = (imageId: number) => {
        router.patch(`/admin/service-images/${imageId}/toggle`, {}, { preserveScroll: true });
    };
    const deleteExistingImage = (imageId: number) => {
        if (confirm('Delete this image?')) {
            router.delete(`/admin/service-images/${imageId}`, { preserveScroll: true });
        }
    };

    return (
        <div className="space-y-10">
            {/* Basic Info */}
            <section className="bg-white rounded-xl shadow p-6 space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Basic Info</h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <input
                        type="text"
                        value={data.category}
                        onChange={(e) => setData('category', e.target.value)}
                        placeholder="e.g. Cyber Security, Digital Marketing, Web Development"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Title *</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className="w-full border rounded-lg px-4 py-2"
                    />
                    {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
                    <textarea
                        value={data.short_description}
                        onChange={(e) => setData('short_description', e.target.value)}
                        rows={2}
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Content (optional)</label>
                    <textarea
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                        rows={5}
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={!!data.is_active}
                            onChange={(e) => setData('is_active', e.target.checked)}
                        />
                        <span className="text-sm text-gray-700">Active (visible on website)</span>
                    </label>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
                        <input
                            type="number"
                            value={data.sort_order}
                            onChange={(e) => setData('sort_order', Number(e.target.value))}
                            className="w-28 border rounded-lg px-3 py-2"
                        />
                    </div>
                </div>
            </section>

            {/* Hero Section */}
            <section className="bg-white rounded-xl shadow p-6 space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Hero Section</h2>
                <p className="text-sm text-gray-500">Website pe: left side content, right side image.</p>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Breadcrumb Label</label>
                    <input
                        type="text"
                        value={data.breadcrumb_label}
                        onChange={(e) => setData('breadcrumb_label', e.target.value)}
                        placeholder="e.g. Digital Marketing"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hero Heading</label>
                    <input
                        type="text"
                        value={data.hero_heading}
                        onChange={(e) => setData('hero_heading', e.target.value)}
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hero Subheading / Paragraph</label>
                    <textarea
                        value={data.hero_subheading}
                        onChange={(e) => setData('hero_subheading', e.target.value)}
                        rows={3}
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hero Image (right side)</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setData('hero_image', e.target.files?.[0] ?? null)}
                        className="w-full border rounded-lg px-4 py-2"
                    />
                    {errors.hero_image && <p className="text-red-600 text-sm mt-1">{errors.hero_image}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hero Image Alt Text (SEO)</label>
                    <input
                        type="text"
                        value={data.hero_image_alt}
                        onChange={(e) => setData('hero_image_alt', e.target.value)}
                        placeholder="Describe the hero image for SEO"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>
            </section>

            {/* What We Offer */}
            <section className="bg-white rounded-xl shadow p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-800">What We Offer</h2>
                    <button
                        type="button"
                        onClick={() => addRow('offerings', { title: '', description: '', icon: '' })}
                        className="text-blue-700 text-sm font-semibold"
                    >
                        + Add Item
                    </button>
                </div>

                {(data.offerings ?? []).map((item: any, index: number) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3 relative">
                        <button
                            type="button"
                            onClick={() => removeRow('offerings', index)}
                            className="absolute top-3 right-3 text-red-600 text-sm"
                        >
                            Remove
                        </button>
                        <input
                            type="text"
                            value={item.title}
                            onChange={(e) => updateRow('offerings', index, 'title', e.target.value)}
                            placeholder="Title e.g. Social Media Content"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                        <textarea
                            value={item.description}
                            onChange={(e) => updateRow('offerings', index, 'description', e.target.value)}
                            placeholder="Description"
                            rows={2}
                            className="w-full border rounded-lg px-4 py-2"
                        />
                        <input
                            type="text"
                            value={item.icon}
                            onChange={(e) => updateRow('offerings', index, 'icon', e.target.value)}
                            placeholder="Icon name (optional, e.g. tabler icon name)"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>
                ))}
            </section>

            {/* Tools & Platforms */}
            <section className="bg-white rounded-xl shadow p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-800">Tools & Platforms</h2>
                    <button
                        type="button"
                        onClick={() => addRow('tools', { name: '', description: '', icon: '' })}
                        className="text-blue-700 text-sm font-semibold"
                    >
                        + Add Tool
                    </button>
                </div>

                {(data.tools ?? []).map((item: any, index: number) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3 relative">
                        <button
                            type="button"
                            onClick={() => removeRow('tools', index)}
                            className="absolute top-3 right-3 text-red-600 text-sm"
                        >
                            Remove
                        </button>
                        <input
                            type="text"
                            value={item.name}
                            onChange={(e) => updateRow('tools', index, 'name', e.target.value)}
                            placeholder="Tool name e.g. Canva"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                        <input
                            type="text"
                            value={item.description}
                            onChange={(e) => updateRow('tools', index, 'description', e.target.value)}
                            placeholder="Short label e.g. Graphic Design & Social Content"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                        <input
                            type="text"
                            value={item.icon}
                            onChange={(e) => updateRow('tools', index, 'icon', e.target.value)}
                            placeholder="Icon / short logo text (optional, e.g. Ps, Pr)"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>
                ))}
            </section>

            {/* Our Process */}
            <section className="bg-white rounded-xl shadow p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-800">Our Process</h2>
                    <button
                        type="button"
                        onClick={() => addRow('process_steps', { title: '', description: '' })}
                        className="text-blue-700 text-sm font-semibold"
                    >
                        + Add Step
                    </button>
                </div>

                {(data.process_steps ?? []).map((item: any, index: number) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3 relative">
                        <button
                            type="button"
                            onClick={() => removeRow('process_steps', index)}
                            className="absolute top-3 right-3 text-red-600 text-sm"
                        >
                            Remove
                        </button>
                        <input
                            type="text"
                            value={item.title}
                            onChange={(e) => updateRow('process_steps', index, 'title', e.target.value)}
                            placeholder="Step title e.g. Content Strategy & Planning"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                        <textarea
                            value={item.description}
                            onChange={(e) => updateRow('process_steps', index, 'description', e.target.value)}
                            placeholder="Step description"
                            rows={2}
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>
                ))}
            </section>

            {/* FAQs */}
            <section className="bg-white rounded-xl shadow p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-800">FAQs</h2>
                    <button
                        type="button"
                        onClick={() => addRow('faqs', { question: '', answer: '' })}
                        className="text-blue-700 text-sm font-semibold"
                    >
                        + Add FAQ
                    </button>
                </div>

                {(data.faqs ?? []).map((item: any, index: number) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3 relative">
                        <button
                            type="button"
                            onClick={() => removeRow('faqs', index)}
                            className="absolute top-3 right-3 text-red-600 text-sm"
                        >
                            Remove
                        </button>
                        <input
                            type="text"
                            value={item.question}
                            onChange={(e) => updateRow('faqs', index, 'question', e.target.value)}
                            placeholder="Question"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                        <textarea
                            value={item.answer}
                            onChange={(e) => updateRow('faqs', index, 'answer', e.target.value)}
                            placeholder="Answer"
                            rows={2}
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>
                ))}
            </section>

            {/* Tags */}
            <section className="bg-white rounded-xl shadow p-6 space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Tags</h2>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                addTag();
                            }
                        }}
                        placeholder="Type a tag and press Enter"
                        className="flex-1 border rounded-lg px-4 py-2"
                    />
                    <button type="button" onClick={addTag} className="px-4 py-2 bg-blue-700 text-white rounded-lg">
                        Add
                    </button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {(data.tags ?? []).map((tag: string, index: number) => (
                        <span
                            key={index}
                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                        >
                            {tag}
                            <button type="button" onClick={() => removeTag(index)} className="text-blue-400 hover:text-red-600">
                                ×
                            </button>
                        </span>
                    ))}
                </div>
            </section>

            {/* Gallery Images */}
            <section className="bg-white rounded-xl shadow p-6 space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Gallery Images</h2>

                {existingImages.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {existingImages.map((img) => (
                            <div key={img.id} className="border rounded-lg p-3 space-y-2">
                                <img
                                    src={`/storage/${img.image_path}`}
                                    alt={img.alt_text ?? ''}
                                    className="w-full h-28 object-cover rounded-lg"
                                />
                                <p className="text-xs text-gray-500 truncate">{img.alt_text || 'No alt text'}</p>
                                <p className="text-xs text-gray-400">{img.tag || 'No tag'}</p>
                                <div className="flex justify-between items-center">
                                    <button
                                        type="button"
                                        onClick={() => toggleExistingImage(img.id)}
                                        className={`text-xs px-2 py-1 rounded-full ${
                                            img.is_visible ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'
                                        }`}
                                    >
                                        {img.is_visible ? 'Visible' : 'Hidden'}
                                    </button>
                                    <button type="button" onClick={() => deleteExistingImage(img.id)} className="text-xs text-red-600">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Add New Images</label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => {
                            Array.from(e.target.files ?? []).forEach((file) => addGalleryImage(file));
                            e.target.value = '';
                        }}
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                {(data.gallery_images ?? []).length > 0 && (
                    <div className="space-y-3">
                        {(data.gallery_images ?? []).map((file: File, index: number) => (
                            <div key={index} className="border rounded-lg p-4 grid md:grid-cols-3 gap-3 items-center">
                                <p className="text-sm text-gray-700 truncate">{file.name}</p>
                                <input
                                    type="text"
                                    value={data.gallery_alt_texts?.[index] ?? ''}
                                    onChange={(e) => updateGalleryMeta(index, 'gallery_alt_texts', e.target.value)}
                                    placeholder="Alt text (SEO)"
                                    className="border rounded-lg px-3 py-2"
                                />
                                <input
                                    type="text"
                                    value={data.gallery_tags?.[index] ?? ''}
                                    onChange={(e) => updateGalleryMeta(index, 'gallery_tags', e.target.value)}
                                    placeholder="Tag e.g. gallery, banner"
                                    className="border rounded-lg px-3 py-2"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeGalleryImage(index)}
                                    className="text-red-600 text-sm text-left md:col-span-3"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* SEO */}
            <section className="bg-white rounded-xl shadow p-6 space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">SEO Settings</h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                    <input
                        type="text"
                        value={data.meta_title}
                        onChange={(e) => setData('meta_title', e.target.value)}
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                    <textarea
                        value={data.meta_description}
                        onChange={(e) => setData('meta_description', e.target.value)}
                        rows={3}
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Meta Keywords</label>
                    <textarea
                        value={data.meta_keywords}
                        onChange={(e) => setData('meta_keywords', e.target.value)}
                        rows={2}
                        placeholder="comma, separated, keywords"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>
            </section>

            {/* CTA */}
            <section className="bg-white rounded-xl shadow p-6 space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Contact Form CTA</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CTA Heading</label>
                        <input
                            type="text"
                            value={data.cta_heading}
                            onChange={(e) => setData('cta_heading', e.target.value)}
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                        <input
                            type="text"
                            value={data.cta_button_text}
                            onChange={(e) => setData('cta_button_text', e.target.value)}
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
