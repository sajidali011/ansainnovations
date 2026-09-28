import { Head, useForm, Link } from '@inertiajs/react';
import { FormEventHandler } from 'react';
// TODO: adjust this import to your actual admin layout (same one Dashboard.tsx uses)
import AdminLayout from '@/layouts/AdminLayout';
import ServiceFormFields from './ServiceFormFields';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        category: '',
        title: '',
        short_description: '',
        content: '',
        breadcrumb_label: '',
        hero_heading: '',
        hero_subheading: '',
        hero_image: null as File | null,
        hero_image_alt: '',
        offerings: [] as any[],
        tools: [] as any[],
        process_steps: [] as any[],
        faqs: [] as any[],
        tags: [] as string[],
        cta_heading: 'Get in Touch',
        cta_button_text: 'Send Message',
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
        sort_order: 0,
        is_active: true,
        gallery_images: [] as File[],
        gallery_alt_texts: [] as string[],
        gallery_tags: [] as string[],
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/admin/services', {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="Create Service" />
            <form onSubmit={submit} className="max-w-5xl mx-auto p-6 space-y-8">
                <h1 className="text-2xl font-bold text-gray-800">Create New Service</h1>

                <ServiceFormFields data={data} setData={setData} errors={errors} />

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
                        {processing ? 'Saving...' : 'Save Service'}
                    </button>
                </div>
            </form>
        </AdminLayout>
    );
}
