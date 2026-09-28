import React from "react";
import { Head, router } from "@inertiajs/react";
import {
    Code2,
    FileText,
    BriefcaseBusiness,
    Users,
    Mail,
    TrendingUp,
    ArrowUpRight,
    Plus,
    MessageSquareQuote,
    HelpCircle,
} from "lucide-react";

import AdminLayout from "@/layouts/AdminLayout";

type Admin = {
    id: number;
    name: string;
    email: string;
};

type Props = {
    admin: Admin;
};

type StatCardProps = {
    title: string;
    value: number;
    growth: string;
    icon: React.ElementType;
    iconClass: string;
    href: string;
};

function StatCard({
    title,
    value,
    growth,
    icon: Icon,
    iconClass,
    href,
}: StatCardProps) {
    return (
        <a
            href={href}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="flex items-start justify-between">
                <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconClass}`}
                >
                    <Icon className="h-6 w-6" />
                </div>

                <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-blue-600" />
            </div>

            <p className="mt-4 text-sm font-medium text-slate-500">
                {title}
            </p>

            <div className="mt-1 flex items-end justify-between">
                <h3 className="text-3xl font-extrabold text-[#101f55]">
                    {value}
                </h3>

                <span className="mb-1 flex items-center gap-1 text-xs font-semibold text-emerald-600">
                    <TrendingUp className="h-3.5 w-3.5" />
                    {growth}
                </span>
            </div>
        </a>
    );
}

export default function Dashboard({ admin }: Props) {
    const logout = () => {
        router.post("/admin/logout");
    };

    return (
        <>
            <Head title="Admin Dashboard" />

            <AdminLayout adminName={admin.name}>
                {/* Welcome */}
                <div className="mb-7">
                    <h2 className="text-2xl font-extrabold text-[#101f55] sm:text-3xl">
                        Good morning, {admin.name} 👋
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 sm:text-base">
                        Here's what's happening with your website today.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
                    <StatCard
                        title="Services"
                        value={12}
                        growth="+2 this month"
                        icon={Code2}
                        iconClass="bg-blue-50 text-blue-600"
                        href="/admin/services"
                    />

                    <StatCard
                        title="Blogs"
                        value={48}
                        growth="+6 this month"
                        icon={FileText}
                        iconClass="bg-emerald-50 text-emerald-600"
                        href="/admin/blogs"
                    />

                    <StatCard
                        title="Portfolio"
                        value={26}
                        growth="+3 this month"
                        icon={BriefcaseBusiness}
                        iconClass="bg-purple-50 text-purple-600"
                        href="/admin/portfolio"
                    />

                    <StatCard
                        title="Clients"
                        value={32}
                        growth="+4 this month"
                        icon={Users}
                        iconClass="bg-orange-50 text-orange-600"
                        href="/admin/clients"
                    />

                    <StatCard
                        title="New Leads"
                        value={18}
                        growth="+8 this month"
                        icon={Mail}
                        iconClass="bg-teal-50 text-teal-600"
                        href="/admin/leads"
                    />
                </div>

                {/* Main Grid */}
                <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
                    {/* Leads Overview */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:col-span-2">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-[#101f55]">
                                    Leads Overview
                                </h3>

                                <p className="mt-1 text-xs text-slate-500">
                                    Monthly enquiry performance
                                </p>
                            </div>

                            <select
                                defaultValue="month"
                                className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-600 outline-none"
                            >
                                <option value="month">This Month</option>
                                <option value="year">This Year</option>
                            </select>
                        </div>

                        {/* Simple chart placeholder */}
                        <div className="mt-7 flex h-56 items-end gap-2 sm:gap-4">
                            {[35, 48, 30, 58, 45, 68, 52, 74, 61, 80, 65, 88].map(
                                (height, index) => (
                                    <div
                                        key={index}
                                        className="group flex h-full flex-1 items-end"
                                    >
                                        <div
                                            className="w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-emerald-400 opacity-80 transition-all duration-500 group-hover:opacity-100"
                                            style={{
                                                height: `${height}%`,
                                            }}
                                        />
                                    </div>
                                )
                            )}
                        </div>

                        <div className="mt-3 flex justify-between text-[10px] text-slate-400">
                            <span>Week 1</span>
                            <span>Week 2</span>
                            <span>Week 3</span>
                            <span>Week 4</span>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <h3 className="font-bold text-[#101f55]">
                            Quick Actions
                        </h3>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                            <a
                                href="/admin/services/create"
                                className="group rounded-xl border border-slate-200 p-4 text-center transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                            >
                                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <Plus className="h-5 w-5" />
                                </span>

                                <span className="mt-2 block text-xs font-semibold text-slate-600">
                                    Add Service
                                </span>
                            </a>

                            <a
                                href="/admin/blogs/create"
                                className="group rounded-xl border border-slate-200 p-4 text-center transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
                            >
                                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                    <FileText className="h-5 w-5" />
                                </span>

                                <span className="mt-2 block text-xs font-semibold text-slate-600">
                                    Write Blog
                                </span>
                            </a>

                            <a
                                href="/admin/portfolio/create"
                                className="group rounded-xl border border-slate-200 p-4 text-center transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-md"
                            >
                                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                                    <BriefcaseBusiness className="h-5 w-5" />
                                </span>

                                <span className="mt-2 block text-xs font-semibold text-slate-600">
                                    Add Portfolio
                                </span>
                            </a>

                            <a
                                href="/admin/clients/create"
                                className="group rounded-xl border border-slate-200 p-4 text-center transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
                            >
                                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                                    <Users className="h-5 w-5" />
                                </span>

                                <span className="mt-2 block text-xs font-semibold text-slate-600">
                                    Add Client
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Recent Enquiries */}
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <div className="flex items-center justify-between border-b border-slate-100 p-5">
                            <div>
                                <h3 className="font-bold text-[#101f55]">
                                    Recent Enquiries
                                </h3>

                                <p className="mt-1 text-xs text-slate-500">
                                    Latest customer enquiries
                                </p>
                            </div>

                            <a
                                href="/admin/leads"
                                className="text-xs font-bold text-blue-600 hover:text-blue-700"
                            >
                                View all →
                            </a>
                        </div>

                        <div className="divide-y divide-slate-100">
                            {[
                                ["Rahul Sharma", "Web Development", "New"],
                                ["Amit Verma", "SEO", "Contacted"],
                                ["Neha Singh", "Graphic Design", "New"],
                                ["Rohit Gupta", "E-Commerce", "Proposal Sent"],
                            ].map(([name, service, status]) => (
                                <div
                                    key={name}
                                    className="flex items-center justify-between gap-3 px-5 py-4"
                                >
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700">
                                            {name}
                                        </p>

                                        <p className="mt-1 text-xs text-slate-400">
                                            {service}
                                        </p>
                                    </div>

                                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-600">
                                        {status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Blogs */}
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <div className="flex items-center justify-between border-b border-slate-100 p-5">
                            <div>
                                <h3 className="font-bold text-[#101f55]">
                                    Recent Blogs
                                </h3>

                                <p className="mt-1 text-xs text-slate-500">
                                    Latest published content
                                </p>
                            </div>

                            <a
                                href="/admin/blogs"
                                className="text-xs font-bold text-blue-600 hover:text-blue-700"
                            >
                                View all →
                            </a>
                        </div>

                        <div className="divide-y divide-slate-100">
                            {[
                                "Laravel vs React — Which One?",
                                "10 SEO Strategies for 2026",
                                "Why Every Business Needs a Website",
                                "Web Design Trends in 2026",
                            ].map((blog, index) => (
                                <div
                                    key={blog}
                                    className="flex items-center justify-between gap-3 px-5 py-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                                            <FileText className="h-4 w-4" />
                                        </span>

                                        <p className="max-w-[250px] truncate text-sm font-semibold text-slate-700">
                                            {blog}
                                        </p>
                                    </div>

                                    <span
                                        className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
                                            index === 3
                                                ? "bg-slate-100 text-slate-500"
                                                : "bg-emerald-50 text-emerald-600"
                                        }`}
                                    >
                                        {index === 3
                                            ? "Draft"
                                            : "Published"}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

               
            </AdminLayout>
        </>
    );
}