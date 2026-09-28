import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* ================= TOP OFFER BAR ================= */}
            <div className="overflow-hidden bg-[#0b5bd3] text-white">
                <div className="relative flex h-[38px] items-center overflow-hidden">

                    <div className="flex min-w-max animate-[marquee_22s_linear_infinite] items-center whitespace-nowrap text-[13px] font-medium sm:text-[14px]">

                        <span className="mx-10">
                            🚀 <strong>Special Offer:</strong> Get up to 20% OFF
                            on Digital Marketing & Website Development Services
                        </span>

                        <span className="mx-10 text-[#bfe0ff]">
                            •
                        </span>

                        <span className="mx-10">
                            📈 Grow Your Business Online with ANSA Innovations
                        </span>

                        <span className="mx-10 text-[#bfe0ff]">
                            •
                        </span>

                        <span className="mx-10">
                            🎯 Free Digital Marketing Consultation Available
                        </span>

                        <span className="mx-10 text-[#bfe0ff]">
                            •
                        </span>

                        <span className="mx-10">
                            🚀 <strong>Special Offer:</strong> Get up to 20% OFF
                            on Digital Marketing & Website Development Services
                        </span>

                    </div>
                </div>
            </div>


            {/* ================= MAIN HEADER ================= */}
            <header className="sticky top-0 z-50 border-b border-[#e5edf7] bg-white shadow-[0_4px_20px_rgba(11,91,211,0.06)]">

                <div className="mx-auto flex h-[76px] max-w-[1450px] items-center justify-between px-5 sm:px-8 lg:px-10">

                    {/* ================= LOGO ================= */}
                    <Link
                        href="/"
                        className="flex items-center"
                        onClick={() => setMenuOpen(false)}
                    >
                     <img 
  src="../images/ansainnovations.png" 
  alt="ANSA Innovations" 
  className="h-19 w-auto object-contain sm:h-30 translate-y-2"
/>
                    </Link>


                    {/* ================= DESKTOP NAVIGATION ================= */}
                    <nav className="hidden items-center gap-8 lg:flex">

                        <Link
                            href="/"
                            className="text-[15px] font-semibold text-[#16213e] transition hover:text-[#0b5bd3]"
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            className="text-[15px] font-semibold text-[#16213e] transition hover:text-[#0b5bd3]"
                        >
                            About
                        </Link>

                        <Link
                            href="/services"
                            className="text-[15px] font-semibold text-[#16213e] transition hover:text-[#0b5bd3]"
                        >
                            Services
                        </Link>

                        <Link
                            href="/clients"
                            className="text-[15px] font-semibold text-[#16213e] transition hover:text-[#0b5bd3]"
                        >
                            Clients
                        </Link>

                        <Link
                            href="/blog"
                            className="text-[15px] font-semibold text-[#16213e] transition hover:text-[#0b5bd3]"
                        >
                            Blog
                        </Link>

                        <Link
                            href="/contact"
                            className="rounded-full bg-[#0b5bd3] px-6 py-3 text-[14px] font-semibold text-white transition duration-300 hover:bg-[#08489f] hover:shadow-lg"
                        >
                            Contact Us
                        </Link>

                    </nav>


                    {/* ================= SOCIAL ICONS + MOBILE TOGGLE ================= */}
                    <div className="flex items-center gap-3">

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#d9e5f5] text-[#0b5bd3] transition hover:bg-[#0b5bd3] hover:text-white sm:flex"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <rect x="3" y="3" width="18" height="18" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle
                                    cx="17.5"
                                    cy="6.5"
                                    r="1"
                                    fill="currentColor"
                                    stroke="none"
                                />
                            </svg>
                        </a>


                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#d9e5f5] text-[#0b5bd3] transition hover:bg-[#0b5bd3] hover:text-white sm:flex"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L4 20l1.2-3.5A8.5 8.5 0 1 1 20.5 11.5Z" />
                                <path d="M8.5 8.5c.3-.5.7-.5 1-.1l.9 1.2c.2.3.2.6 0 .9l-.4.5c.6 1.2 1.5 2.1 2.7 2.7l.5-.4c.3-.2.6-.2.9 0l1.2.9c.4.3.4.7-.1 1-.6.4-1.4.5-2.1.2-2.7-1-4.5-2.8-5.5-5.5-.3-.7-.2-1.5.2-2.1Z" />
                            </svg>
                        </a>


                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#d9e5f5] text-[#0b5bd3] transition hover:bg-[#0b5bd3] hover:text-white sm:flex"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.5ZM3.3 9.5h3.8V21H3.3V9.5ZM9.3 9.5H13v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8V21h-3.8v-5.4c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.3V9.5Z" />
                            </svg>
                        </a>


                        {/* ================= MOBILE MENU BUTTON ================= */}
                        <button
                            type="button"
                            aria-label="Toggle navigation"
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d9e5f5] bg-white text-[#0b5bd3] transition hover:bg-[#f1f6fc] lg:hidden"
                        >
                            <div className="flex w-5 flex-col gap-[5px]">

                                <span
                                    className={`h-[2px] w-5 bg-current transition-all duration-300 ${
                                        menuOpen
                                            ? "translate-y-[7px] rotate-45"
                                            : ""
                                    }`}
                                />

                                <span
                                    className={`h-[2px] w-5 bg-current transition-all duration-300 ${
                                        menuOpen ? "opacity-0" : ""
                                    }`}
                                />

                                <span
                                    className={`h-[2px] w-5 bg-current transition-all duration-300 ${
                                        menuOpen
                                            ? "-translate-y-[7px] -rotate-45"
                                            : ""
                                    }`}
                                />

                            </div>
                        </button>

                    </div>

                </div>


                {/* ================= MOBILE NAVIGATION ================= */}
                <div
                    className={`overflow-hidden border-t border-[#e5edf7] bg-white transition-all duration-300 lg:hidden ${
                        menuOpen
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >

                    <nav className="mx-auto flex max-w-[1450px] flex-col px-5 py-4 sm:px-8">

                        <Link
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-[#edf2f8] py-4 text-[15px] font-semibold text-[#16213e] hover:text-[#0b5bd3]"
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-[#edf2f8] py-4 text-[15px] font-semibold text-[#16213e] hover:text-[#0b5bd3]"
                        >
                            About
                        </Link>

                        <Link
                            href="/services"
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-[#edf2f8] py-4 text-[15px] font-semibold text-[#16213e] hover:text-[#0b5bd3]"
                        >
                            Services
                        </Link>

                        <Link
                            href="/clients"
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-[#edf2f8] py-4 text-[15px] font-semibold text-[#16213e] hover:text-[#0b5bd3]"
                        >
                            Clients
                        </Link>

                        <Link
                            href="/blog"
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-[#edf2f8] py-4 text-[15px] font-semibold text-[#16213e] hover:text-[#0b5bd3]"
                        >
                            Blog
                        </Link>

                        <Link
                            href="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="mt-4 rounded-xl bg-[#0b5bd3] px-5 py-3.5 text-center text-[15px] font-semibold text-white transition hover:bg-[#08489f]"
                        >
                            Contact Us
                        </Link>


                        {/* MOBILE SOCIAL ICONS */}
                        <div className="mt-5 flex items-center justify-center gap-3 pb-2">

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1f6fc] text-[#0b5bd3]"
                            >
                                Instagram
                            </a>

                            <a
                                href="https://wa.me/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1f6fc] text-[#0b5bd3]"
                            >
                                WhatsApp
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1f6fc] text-[#0b5bd3]"
                            >
                                LinkedIn
                            </a>

                        </div>

                    </nav>

                </div>

            </header>


            {/* ================= MARQUEE ANIMATION ================= */}
            <style>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </>
    );
}       