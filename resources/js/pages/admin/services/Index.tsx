import { Head, Link, router } from '@inertiajs/react';
// TODO: adjust this import to your actual admin layout (same one Dashboard.tsx uses)
import AdminLayout from '@/layouts/AdminLayout';
import { Service } from '@/types/service';

export default function Index({ services }: { services: Service[] }) {
    const toggleActive = (service: Service) => {
        router.patch(`/admin/services/${service.id}/toggle`, {}, { preserveScroll: true });
    };

    const deleteService = (service: Service) => {
        if (confirm(`Delete "${service.title}"? This cannot be undone.`)) {
            router.delete(`/admin/services/${service.id}`, { preserveScroll: true });
        }
    };

    return (
        <AdminLayout>
            <Head title="Services" />
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Services</h1>
                    <Link
                        href="/admin/services/create"
                        className="px-5 py-2 rounded-lg bg-blue-700 text-white font-semibold"
                    >
                        + Add New Service
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-sm text-gray-600">
                            <tr>
                                <th className="p-4">Image</th>
                                <th className="p-4">Title</th>
                                <th className="p-4">Category</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Order</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="p-6 text-center text-gray-400">
                                        No services yet. Click "Add New Service" to create one.
                                    </td>
                                </tr>
                            )}
                            {services.map((service) => (
                                <tr key={service.id} className="border-t">
                                    <td className="p-4">
                                        {service.hero_image ? (
                                            <img
                                                src={`/storage/${service.hero_image}`}
                                                alt={service.title}
                                                className="w-14 h-14 object-cover rounded-lg"
                                            />
                                        ) : (
                                            <div className="w-14 h-14 bg-gray-100 rounded-lg" />
                                        )}
                                    </td>
                                    <td className="p-4 font-medium text-gray-800">{service.title}</td>
                                    <td className="p-4 text-gray-600">{service.category ?? '—'}</td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => toggleActive(service)}
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                service.is_active
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-gray-200 text-gray-600'
                                            }`}
                                        >
                                            {service.is_active ? 'Active' : 'Hidden'}
                                        </button>
                                    </td>
                                    <td className="p-4 text-gray-600">{service.sort_order}</td>
                                    <td className="p-4 text-right space-x-3">
                                        <Link href={`/admin/services/${service.id}/edit`} className="text-blue-700 font-medium">
                                            Edit
                                        </Link>
                                        <button onClick={() => deleteService(service)} className="text-red-600 font-medium">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
