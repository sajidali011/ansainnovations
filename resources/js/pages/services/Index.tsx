import { Head, Link } from '@inertiajs/react';

interface Service {
    id: number;
    title: string;
    slug: string;
    short_description: string | null;
    image: string | null;
}

export default function Index({ services }: { services: Service[] }) {
    return (
        <>
            <Head title="Our Services" />
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-sm font-semibold text-green-600 tracking-wide uppercase">What We Do</p>
                    <h1 className="text-4xl font-extrabold text-gray-900 mt-2">Our Services</h1>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                        Powerful digital solutions designed to help your business grow, perform and stand out.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
                        {services.map((service) => (
                            <Link
                                key={service.id}
                                href={route('services.show', service.slug)}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition block"
                            >
                                {service.image ? (
                                    <img
                                        src={`/storage/${service.image}`}
                                        className="h-14 w-14 rounded-xl object-cover mb-4"
                                    />
                                ) : (
                                    <div className="h-14 w-14 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 font-semibold mb-4">
                                        {'</>'}
                                    </div>
                                )}
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                {service.short_description && (
                                    <p className="text-gray-500 text-sm mb-4">{service.short_description}</p>
                                )}
                                <span className="text-amber-600 font-semibold text-sm">EXPLORE &rarr;</span>
                            </Link>
                        ))}
                    </div>

                    {services.length === 0 && (
                        <p className="text-gray-400 mt-12">Services jaldi add ki jayengi.</p>
                    )}
                </div>
            </section>
        </>
    );
}