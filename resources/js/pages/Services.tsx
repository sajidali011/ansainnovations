import { Head, Link } from '@inertiajs/react';
// TODO: adjust this import to your actual public site layout
import MainLayout from '@/layouts/MainLayout';
import { Service } from '@/types/service';

export default function Services({ services }: { services: Service[] }) {
    return (
        <MainLayout>
            <Head title="Our Services" />

            <section className="py-20 px-6 md:px-16 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center mb-14">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Explore the range of services we offer across web development, digital marketing, and more.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition"
                        >
                            {service.hero_image && (
                                <img
                                    src={`/storage/${service.hero_image}`}
                                    alt={service.hero_image_alt || service.title}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <div className="p-6">
                                {service.category && (
                                    <span className="text-xs font-semibold text-blue-700 uppercase">{service.category}</span>
                                )}
                                <h2 className="text-xl font-bold text-gray-800 mt-2 mb-2">{service.title}</h2>
                                <p className="text-gray-500 text-sm">{service.short_description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </MainLayout>
    );
}
