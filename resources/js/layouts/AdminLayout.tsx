import React, { useState, useEffect } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

type AdminLayoutProps = {
    children: React.ReactNode;
    adminName?: string;
    adminRole?: string;
};

export default function AdminLayout({
    children,
    adminName = "Admin",
    adminRole = "Administrator",
}: AdminLayoutProps) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    // Track viewport so main content margin only reacts to "collapsed" on desktop
    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // Close mobile drawer automatically if window is resized up to desktop
    useEffect(() => {
        if (isDesktop && mobileOpen) setMobileOpen(false);
    }, [isDesktop]);

    const contentMarginLeft = isDesktop ? (collapsed ? 84 : 230) : 0;

    return (
        <div className="min-h-screen bg-[#f5f7fb]">
            <AdminSidebar
                mobileOpen={mobileOpen}
                onCloseMobile={() => setMobileOpen(false)}
                collapsed={collapsed}
                onToggleCollapsed={() => setCollapsed((prev) => !prev)}
            />

            <div
                style={{ marginLeft: contentMarginLeft }}
                className="min-h-screen transition-[margin] duration-300 ease-in-out"
            >
                <AdminHeader
                    adminName={adminName}
                    adminRole={adminRole}
                    onOpenMobileMenu={() => setMobileOpen(true)}
                    collapsed={collapsed}
                    onToggleCollapsed={() => setCollapsed((prev) => !prev)}
                />

                <main className="p-4 sm:p-6 lg:p-8">{children}</main>
            </div>
        </div>
    );
}