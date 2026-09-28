import { Head, useForm, Link } from '@inertiajs/react';
import { FormEventHandler } from 'react';
// TODO: adjust this import to your actual admin layout (same one Dashboard.tsx uses)
import AdminLayout from '@/layouts/AdminLayout';
import ServiceFormFields from './ServiceFormFields';
import { Service } from '@/types/service';

export default function Edit({ service }: { service: Service }) {
    const { data, setData, post, processing, errors, transform } = useForm({
        category: service.category ?? '',
        title: service.title ?? '',
        short_description: service.short_description ?? '',
        content: service.content ?? '',
        breadcrumb_label: service.breadcrumb_label ?? '',
        hero_heading: service.hero_heading ?? '',
        hero_subheading: service.hero_subheading ?? '',
        hero_image: null as File | null,
        hero_image_alt: service.hero_image_alt ?? '',
        offerings: service.offerings ?? [],
        tools: service.tools ?? [],
        process_steps: service.process_steps ?? [],
        faqs: service.faqs ?? [],
        tags: service.tags ?? [],
        cta_heading: service.cta_heading ?? 'Get in Touch',
        cta_button_text: service.cta_button_text ?? 'Send Message',
        meta_title: service.meta_title ?? '',
        meta_description: service.meta_description ?? '',
        meta_keywords: service.meta_keywords ?? '',
        sort_order: service.sort_order ?? 0,
        is_active: service.is_active ?? true,
        gallery_images: [] as File[],
        gallery_alt_texts: [] as string[],
        gallery_tags: [] as string[],
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // Laravel can't parse multipart PUT requests directly, so we spoof the method.
        transform((formData) => ({ ...formData, _method: 'put' }));
        post(`/admin/services/${service.id}`, {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title={`Edit ${service.title}`} />
            <form onSubmit={submit} className="max-w-5xl mx-auto p-6 space-y-8">
                <h1 className="text-2xl font-bold text-gray-800">Edit Service</h1>

                <ServiceFormFields
                    data={data}
                    setData={setData}
                    errors={errors}
                    existingImages={service.images}
                />

                <div className="flex justify-end gap-3">
                    <Link
                        href="/admin/services"
                        className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={processing}
                        className="px-5 py-2 rounded-lg bg-blue-700 text-white font-semibold disabled:opacity-50"
                    >
                        {processing ? 'Updating...' : 'Update Service'}
                    </button>
                </div>
            </form>
        </AdminLayout>
    );
}
