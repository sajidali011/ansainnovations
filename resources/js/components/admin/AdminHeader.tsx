import React from "react";
import { Menu, Search, Bell, Maximize2, ChevronDown, ChevronsLeft, ChevronsRight } from "lucide-react";

export type AdminHeaderProps = {
    adminName: string;
    adminRole: string;
    onOpenMobileMenu: () => void;
    collapsed: boolean;
    onToggleCollapsed: () => void;
};

export default function AdminHeader({
    adminName,
    adminRole,
    onOpenMobileMenu,
    collapsed,
    onToggleCollapsed,
}: AdminHeaderProps) {
    return (
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 border-b border-slate-200 bg-white/80 px-4 backdrop-blur-md sm:px-6">
            <button
                type="button"
                onClick={onOpenMobileMenu}
                className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 lg:hidden"
                aria-label="Open menu"
            >
                <Menu className="h-5 w-5" />
            </button>

            <button
                type="button"
                onClick={onToggleCollapsed}
                className="hidden rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-800 lg:flex"
                aria-label="Toggle sidebar"
            >
                {collapsed ? <ChevronsRight className="h-5 w-5" /> : <ChevronsLeft className="h-5 w-5" />}
            </button>

            {/* Search — hidden on small screens */}
            <div className="ml-1 hidden max-w-sm flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-400 md:flex">
                <Search className="h-4 w-4" />
                <span className="flex-1">Search anything...</span>
                <kbd className="rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-400">
                    Ctrl + /
                </kbd>
            </div>

            <div className="ml-auto flex items-center gap-1.5 sm:gap-3">
                <button
                    type="button"
                    className="relative rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                    aria-label="Notifications"
                >
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                        5
                    </span>
                </button>

                <button
                    type="button"
                    className="hidden rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 sm:flex"
                    aria-label="Fullscreen"
                >
                    <Maximize2 className="h-5 w-5" />
                </button>

                <button
                    type="button"
                    className="flex items-center gap-2 rounded-xl py-1.5 pl-1.5 pr-2 transition hover:bg-slate-100 sm:pr-3"
                >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-emerald-400 text-sm font-bold text-white">
                        {adminName.charAt(0).toUpperCase()}
                    </div>

                    <div className="hidden text-left leading-tight sm:block">
                        <p className="text-sm font-bold text-slate-700">{adminName}</p>
                        <p className="text-[11px] text-slate-400">{adminRole}</p>
                    </div>

                    <ChevronDown className="hidden h-3.5 w-3.5 text-slate-400 sm:block" />
                </button>
            </div>
        </header>
    );
}