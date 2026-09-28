import React from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    LayoutDashboard,
    Code2,
    BriefcaseBusiness,
    Users,
    MessageSquareQuote,
    HelpCircle,
    FileText,
    FolderOpen,
    Tags,
    Image,
    Mail,
    Search,
    UserCog,
    Settings,
    ChevronsLeft,
    ChevronsRight,
    X,
} from "lucide-react";

type AdminSidebarProps = {
    mobileOpen: boolean;
    onCloseMobile: () => void;
    collapsed: boolean;
    onToggleCollapsed: () => void;
};

type NavItem = { label: string; href: string; icon: React.ElementType };
type NavSection = { title: string; items: NavItem[] };

const NAV_SECTIONS: NavSection[] = [
    { title: "Main", items: [{ label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard }] },
    {
        title: "Website",
        items: [
            { label: "Services", href: "/admin/services", icon: Code2 },
            { label: "Portfolio", href: "/admin/portfolio", icon: BriefcaseBusiness },
            { label: "Clients", href: "/admin/clients", icon: Users },
            { label: "Testimonials", href: "/admin/testimonials", icon: MessageSquareQuote },
            { label: "FAQs", href: "/admin/faqs", icon: HelpCircle },
            { label: "Pages", href: "/admin/pages", icon: FileText },
        ],
    },
    {
        title: "Content",
        items: [
            { label: "Blogs", href: "/admin/blogs", icon: FileText },
            { label: "Categories", href: "/admin/categories", icon: FolderOpen },
            { label: "Tags", href: "/admin/tags", icon: Tags },
            { label: "Media Library", href: "/admin/media", icon: Image },
        ],
    },
    {
        title: "Business",
        items: [
            { label: "Leads / Enquiries", href: "/admin/leads", icon: Mail },
            { label: "Service Enquiries", href: "/admin/service-enquiries", icon: Search },
        ],
    },
    {
        title: "System",
        items: [
            { label: "Users & Roles", href: "/admin/users", icon: UserCog },
            { label: "Settings", href: "/admin/settings", icon: Settings },
        ],
    },
];

export default function AdminSidebar({
    mobileOpen,
    onCloseMobile,
    collapsed,
    onToggleCollapsed,
}: AdminSidebarProps) {
    const { url } = usePage();
    const isActive = (path: string) => url.startsWith(path);

    const linkClass = (path: string) => `
        group relative flex items-center gap-3 rounded-xl px-3 py-2.5
        text-sm font-medium transition-all duration-200
        ${collapsed ? "justify-center" : ""}
        ${isActive(path) ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "text-slate-300 hover:bg-white/10 hover:text-white"}
    `;

    // Lock page scroll while the mobile drawer is open
    React.useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    // Sidebar width: full 260px on mobile, collapses only on desktop (lg = 1024px+)
    const sidebarWidth = collapsed && typeof window !== "undefined" && window.innerWidth >= 1024 ? 84 : 260;

    return (
        <>
            {/* Mobile backdrop */}
            {mobileOpen && (
                <div
                    onClick={onCloseMobile}
                    className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
                    aria-hidden="true"
                />
            )}

            <aside
                style={{
                    transform: mobileOpen ? "translateX(0)" : undefined,
                    width: sidebarWidth,
                }}
                className={`
                    fixed left-0 top-0 z-50 flex h-screen flex-col
                    bg-[#061a35] text-white
                    transition-[transform,width] duration-300 ease-in-out
                    ${mobileOpen ? "" : "-translate-x-full lg:translate-x-0"}
                `}
            >
                {/* Logo */}
                <div className="flex h-[70px] shrink-0 items-center justify-between border-b border-white/10 px-4">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-emerald-400 font-bold">
                            AI
                        </div>
                        {!collapsed && (
                            <div className="whitespace-nowrap">
                                <h1 className="text-sm font-extrabold tracking-wide">ANSA</h1>
                                <p className="text-[10px] font-semibold tracking-[2px] text-slate-400">INNOVATIONS</p>
                            </div>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={onCloseMobile}
                        className="rounded-lg p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white lg:hidden"
                        aria-label="Close menu"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-5">
                    {NAV_SECTIONS.map((section) => (
                        <div key={section.title} className="mb-1">
                            {!collapsed && (
                                <p className="mb-2 mt-6 px-3 text-[10px] font-bold uppercase tracking-[1.5px] text-slate-500 first:mt-0">
                                    {section.title}
                                </p>
                            )}
                            <div className="space-y-1">
                                {section.items.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={linkClass(item.href)}
                                        title={collapsed ? item.label : undefined}
                                        onClick={onCloseMobile}
                                    >
                                        <item.icon className="h-4 w-4 shrink-0" />
                                        {!collapsed && <span className="truncate">{item.label}</span>}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>

                {/* Bottom collapse toggle (desktop only) */}
                <div className="shrink-0 border-t border-white/10 p-3">
                    <button
                        type="button"
                        onClick={onToggleCollapsed}
                        className={`hidden w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-400 transition hover:bg-white/10 hover:text-white lg:flex ${
                            collapsed ? "justify-center" : ""
                        }`}
                    >
                        {collapsed ? <ChevronsRight className="h-4 w-4" /> : <ChevronsLeft className="h-4 w-4" />}
                        {!collapsed && <span>Collapse Menu</span>}
                    </button>
                </div>
            </aside>
        </>
    );
}