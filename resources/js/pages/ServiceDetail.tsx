import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
// TODO: adjust this import to your actual public site layout
import MainLayout from '@/layouts/MainLayout';
import { Service } from '@/types/service';

export default function ServiceDetail({ service }: { service: Service }) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // NOTE: if you already have a Leads/Contact system (Leads.tsx exists in your
    // admin panel), point this form at that route instead of building a new one.
    const { data, setData, post, processing, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        message: '',
        service_slug: service.slug,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // TODO: replace with your actual leads/contact route if you have one
        post('/contact', {
            onSuccess: () => reset(),
        });
    };

    const visibleImages = (service.images ?? []).filter((img) => img.is_visible);

    return (
        <MainLayout>
            <Head>
                <title>{service.meta_title || service.title}</title>
                <meta name="description" content={service.meta_description || service.short_description || ''} />
                {service.meta_keywords && <meta name="keywords" content={service.meta_keywords} />}
                <meta property="og:title" content={service.meta_title || service.title} />
                <meta property="og:description" content={service.meta_description || service.short_description || ''} />
                {service.hero_image && <meta property="og:image" content={`/storage/${service.hero_image}`} />}
            </Head>

            {/* Hero Section: left = content, right = image */}
            <section className="bg-[#0b1440] text-white py-20 px-6 md:px-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-sm text-blue-300 mb-4">
                            Home <span className="mx-1">›</span> {service.breadcrumb_label || service.title}
                        </p>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                            {service.hero_heading || service.title}
                        </h1>
                        <p className="text-blue-100 text-lg leading-relaxed">{service.hero_subheading}</p>
                    </div>

                    {service.hero_image && (
                        <div className="rounded-2xl overflow-hidden">
                            <img
                                src={`/storage/${service.hero_image}`}
                                alt={service.hero_image_alt || service.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                </div>
            </section>

            {/* What We Offer */}
            {(service.offerings?.length ?? 0) > 0 && (
                <section className="py-20 px-6 md:px-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto text-center mb-14">
                        <span className="inline-block border rounded-full px-4 py-1 text-sm font-semibold text-blue-700 mb-4">
                            • WHAT WE OFFER
                        </span>
                        <h2 className="text-3xl font-bold text-gray-800">Comprehensive Solutions</h2>
                    </div>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                        {service.offerings!.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl shadow p-8">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600 font-bold">
                                    {index + 1}
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-500">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Tools & Platforms */}
            {(service.tools?.length ?? 0) > 0 && (
                <section className="py-20 px-6 md:px-16">
                    <div className="max-w-7xl mx-auto text-center mb-14">
                        <span className="inline-block border rounded-full px-4 py-1 text-sm font-semibold text-blue-700 mb-4">
                            • TOOLS & PLATFORMS
                        </span>
                        <h2 className="text-3xl font-bold text-gray-800">Tools We Use</h2>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                        {service.tools!.map((tool, index) => (
                            <div key={index} className="bg-blue-50 rounded-xl p-8 text-center">
                                <p className="text-2xl font-bold text-blue-600 mb-2">{tool.icon || tool.name.slice(0, 2)}</p>
                                <h3 className="font-bold text-gray-800">{tool.name}</h3>
                                <p className="text-sm text-gray-500">{tool.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Our Process + Contact Form */}
            {(service.process_steps?.length ?? 0) > 0 && (
                <section className="py-20 px-6 md:px-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto text-center mb-14">
                        <span className="inline-block border rounded-full px-4 py-1 text-sm font-semibold text-blue-700 mb-4">
                            • OUR PROCESS
                        </span>
                        <h2 className="text-3xl font-bold text-gray-800">{service.title} Approach</h2>
                    </div>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            {service.process_steps!.map((step, index) => (
                                <div key={index} className="bg-blue-50 rounded-xl p-6">
                                    <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 text-sm">{step.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-xl shadow overflow-hidden">
                            <div className="bg-blue-700 text-white text-center py-4 font-bold">
                                {service.cta_heading || 'Connect With Our Experts'}
                            </div>
                            <form onSubmit={submit} className="p-6 space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name*"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full border rounded-lg px-4 py-3"
                                    required
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="email"
                                        placeholder="Your Email*"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full border rounded-lg px-4 py-3"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Phone No.*"
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        className="w-full border rounded-lg px-4 py-3"
                                        required
                                    />
                                </div>
                                <textarea
                                    placeholder="Please share your requirements*"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    rows={4}
                                    className="w-full border rounded-lg px-4 py-3"
                                    required
                                />
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-[#0b1440] text-white py-3 rounded-lg font-bold disabled:opacity-50"
                                >
                                    {service.cta_button_text || 'Submit'} →
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            )}

            {/* FAQs */}
            {(service.faqs?.length ?? 0) > 0 && (
                <section className="py-20 px-6 md:px-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Frequently Asked Questions</h2>
                        <div className="space-y-3">
                            {service.faqs!.map((faq, index) => (
                                <div key={index} className="border rounded-xl overflow-hidden">
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full text-left px-6 py-4 font-semibold text-gray-800 flex justify-between items-center"
                                    >
                                        {faq.question}
                                        <span>{openFaq === index ? '−' : '+'}</span>
                                    </button>
                                    {openFaq === index && <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Gallery (only images the admin marked as visible) */}
            {visibleImages.length > 0 && (
                <section className="py-20 px-6 md:px-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                        {visibleImages.map((img) => (
                            <img
                                key={img.id}
                                src={`/storage/${img.image_path}`}
                                alt={img.alt_text || service.title}
                                className="w-full h-40 object-cover rounded-xl"
                            />
                        ))}
                    </div>
                </section>
            )}

            {/* Tags */}
            {(service.tags?.length ?? 0) > 0 && (
                <section className="pb-16 px-6 md:px-16">
                    <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
                        {service.tags!.map((tag, index) => (
                            <span key={index} className="bg-white border rounded-full px-4 py-1 text-sm text-gray-600">
                                {tag}
                            </span>
                        ))}
                    </div>
                </section>
            )}
        </MainLayout>
    );
}
