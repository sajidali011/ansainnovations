import { Head, Link } from '@inertiajs/react';

interface Service {
    title: string;
    slug: string;
    content: string;
    image: string | null;
    meta_title: string | null;
    meta_description: string | null;
    meta_keywords: string | null;
}

export default function Show({ service }: { service: Service }) {
    return (
        <>
            <Head>
                <title>{service.meta_title || service.title}</title>
                {service.meta_description && <meta name="description" content={service.meta_description} />}
                {service.meta_keywords && <meta name="keywords" content={service.meta_keywords} />}
                <meta property="og:title" content={service.meta_title || service.title} />
                {service.meta_description && (
                    <meta property="og:description" content={service.meta_description} />
                )}
                {service.image && <meta property="og:image" content={`/storage/${service.image}`} />}
            </Head>

            <section className="py-16">
                <div className="max-w-3xl mx-auto px-4">
                    <Link href={route('services.index')} className="text-sm text-gray-500 hover:underline">
                        &larr; All Services
                    </Link>

                    <h1 className="text-3xl font-extrabold text-gray-900 mt-4 mb-6">{service.title}</h1>

                    {service.image && (
                        <img
                            src={`/storage/${service.image}`}
                            alt={service.title}
                            className="w-full rounded-2xl mb-8 object-cover max-h-96"
                        />
                    )}

                    <div
                        className="prose prose-neutral max-w-none"
                        dangerouslySetInnerHTML={{ __html: service.content }}
                    />
                </div>
            </section>
        </>
    );
}