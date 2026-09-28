import { Link } from "@inertiajs/react";

import {
    ArrowUpRight,
    ArrowRight,
    Phone,
    Mail,
    MapPin,
    Globe,
    ShoppingCart,
    Code2,
    MonitorCog,
    Palette,
    Video,
    Search,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className="
                relative
                overflow-hidden
                bg-[#10182d]
                text-[#17213f]
            "
        >
            {/* ================= BACKGROUND EFFECT ================= */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <svg
                    className="
                        absolute
                        right-0
                        top-0
                        h-full
                        w-[85%]
                        opacity-80
                    "
                    viewBox="0 0 1200 700"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M100 0L800 700"
                        stroke="#2458b8"
                        strokeWidth="1.5"
                        opacity="0.5"
                    />

                    <path
                        d="M200 0L900 700"
                        stroke="#2458b8"
                        strokeWidth="1.5"
                        opacity="0.45"
                    />

                    <path
                        d="M300 0L1000 700"
                        stroke="#2458b8"
                        strokeWidth="1.5"
                        opacity="0.4"
                    />

                    <path
                        d="M400 0L1100 700"
                        stroke="#2458b8"
                        strokeWidth="1.5"
                        opacity="0.35"
                    />

                    <path
                        d="M500 0L1200 700"
                        stroke="#62b83f"
                        strokeWidth="1"
                        opacity="0.3"
                    />

                    <path
                        d="M0 300L400 700"
                        stroke="#62b83f"
                        strokeWidth="1"
                        opacity="0.25"
                    />
                </svg>

                {/* BLUE GLOW */}

                <div
                    className="
                        absolute
                        right-[5%]
                        top-[-150px]
                        h-[450px]
                        w-[450px]
                        rounded-full
                        bg-[#1261c9]
                        opacity-[0.18]
                        blur-[130px]
                    "
                />

                {/* GREEN GLOW */}

                <div
                    className="
                        absolute
                        bottom-[-200px]
                        left-[10%]
                        h-[400px]
                        w-[400px]
                        rounded-full
                        bg-[#62a843]
                        opacity-[0.08]
                        blur-[140px]
                    "
                />
            </div>


            {/* ================= MAIN CONTAINER ================= */}

            <div
                className="
                    relative
                    mx-auto
                    max-w-[1750px]
                    px-5
                    py-9
                    sm:px-8
                    sm:py-11
                    lg:px-12
                    lg:py-12
                "
            >

                {/* ================= HEADING ================= */}

                <div
                    className="
                        mb-7
                        flex
                        items-center
                        justify-between
                        gap-5
                    "
                >

                    <div>

                        <p
                            className="
                                text-[11px]
                                font-bold
                                tracking-[4px]
                                text-[#62b83f]
                            "
                        >
                            LET'S WORK TOGETHER
                        </p>

                        <h2
                            className="
                                mt-2
                                text-[30px]
                                font-bold
                                leading-[1.1]
                                tracking-[-1px]
                                text-white
                                sm:text-[40px]
                                lg:text-[48px]
                            "
                        >
                            Let's Build Something{" "}

                            <span className="text-[#2c70d2]">
                                Great.
                            </span>

                        </h2>

                    </div>


                    <Link
                        href="/contact"
                        className="
                            group
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/30
                            text-white
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#1261c9]
                            hover:bg-[#1261c9]
                            sm:h-14
                            sm:w-14
                        "
                    >
                        <ArrowUpRight
                            size={21}
                            className="
                                transition-transform
                                duration-300
                                group-hover:rotate-45
                            "
                        />
                    </Link>

                </div>


                {/* ================= WHITE CARD ================= */}

                <div
                    className="
                        overflow-hidden
                        rounded-[20px]
                        border
                        border-white/40
                        bg-white
                        shadow-[0_25px_70px_rgba(0,0,0,0.18)]
                    "
                >

                    <div
                        className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            lg:grid-cols-[1.05fr_1fr_1.1fr_1.05fr]
                        "
                    >

                        {/* ================= ABOUT ================= */}

                        <div
                            className="
                                flex
                                flex-col
                                border-b
                                border-[#e4e8ef]
                                p-7
                                sm:p-8
                                lg:border-b-0
                                lg:border-r
                            "
                        >

                            {/* LOGO */}

                            <Link
                                href="/"
                                className="
                                    inline-flex
                                    h-[76px]
                                    items-center
                                    self-start
                                    overflow-hidden
                                "
                            >
                                <img
                                    src="../images/ansainnovations.png"
                                    alt="ANSA Innovations"
                                    className="
                                        block
                                        h-[140px]
                                        w-auto
                                        max-w-full
                                        object-contain
                                        object-left
                                    "
                                />
                            </Link>


                            {/* ABOUT CONTENT */}

                            <div className="mt-3">

                                <p
                                    className="
                                        max-w-[320px]
                                        text-[14px]
                                        leading-7
                                        text-[#53617b]
                                    "
                                >
                                    ANSA Innovations is a growing digital agency
                                    focused on building modern websites, web
                                    applications and creative digital solutions.
                                </p>


                                <p
                                    className="
                                        mt-3
                                        text-[13px]
                                        font-semibold
                                        leading-6
                                        text-[#62a843]
                                    "
                                >
                                    Growing, Creating & Innovating —
                                    Year 1 and Beyond.
                                </p>


                                {/* ================= SOCIAL ICONS ================= */}

                                <div className="mt-5 flex gap-3">

                                    <a
                                        href="#"
                                        aria-label="Facebook"
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-[#d7dfeb]
                                            text-[#101f55]
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:border-[#1261c9]
                                            hover:bg-[#1261c9]
                                            hover:text-white
                                        "
                                    >
                                        <FaFacebookF size={16} />
                                    </a>


                                    <a
                                        href="#"
                                        aria-label="Instagram"
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-[#d7dfeb]
                                            text-[#101f55]
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:border-[#1261c9]
                                            hover:bg-[#1261c9]
                                            hover:text-white
                                        "
                                    >
                                        <FaInstagram size={17} />
                                    </a>


                                    <a
                                        href="#"
                                        aria-label="LinkedIn"
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-[#d7dfeb]
                                            text-[#101f55]
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:border-[#1261c9]
                                            hover:bg-[#1261c9]
                                            hover:text-white
                                        "
                                    >
                                        <FaLinkedinIn size={17} />
                                    </a>

                                </div>

                            </div>

                        </div>


                      {/* ================= QUICK LINKS ================= */}

<div
    className="
        border-b
        border-[#e4e8ef]
        p-7
        sm:p-8
        md:border-r
        lg:border-b-0
    "
>
    <h3
        className="
            text-[15px]
            font-bold
            tracking-[2px]
            text-[#17213f]
        "
    >
        QUICK LINKS
    </h3>

    <div className="mt-4 h-[3px] w-10 bg-[#1261c9]" />

    <ul className="mt-6 space-y-3.5">

        {/* Home */}
        <li>
            <Link
                href="/"
                className="
                    group
                    flex
                    items-center
                    gap-3
                    text-[14px]
                    text-[#53617b]
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-[#1261c9]
                "
            >
                <ArrowRight
                    size={15}
                    className="
                        text-[#1261c9]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                    "
                />
                Home
            </Link>
        </li>


        {/* About Us */}
        <li>
            <Link
                href="/about"
                className="
                    group
                    flex
                    items-center
                    gap-3
                    text-[14px]
                    text-[#53617b]
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-[#1261c9]
                "
            >
                <ArrowRight
                    size={15}
                    className="
                        text-[#1261c9]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                    "
                />
                About Us
            </Link>
        </li>


        {/* Our Services */}
        <li>
            <Link
                href="/services"
                className="
                    group
                    flex
                    items-center
                    gap-3
                    text-[14px]
                    text-[#53617b]
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-[#1261c9]
                "
            >
                <ArrowRight
                    size={15}
                    className="
                        text-[#1261c9]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                    "
                />
                Our Services
            </Link>
        </li>


        {/* Our Portfolio */}
        <li>
            <Link
                href="/portfolio"
                className="
                    group
                    flex
                    items-center
                    gap-3
                    text-[14px]
                    text-[#53617b]
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-[#1261c9]
                "
            >
                <ArrowRight
                    size={15}
                    className="
                        text-[#1261c9]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                    "
                />
                Our Portfolio
            </Link>
        </li>


        {/* Request a Quote */}
        <li>
            <Link
                href="/consultation"
                className="
                    group
                    flex
                    items-center
                    gap-3
                    text-[14px]
                    text-[#53617b]
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-[#1261c9]
                "
            >
                <ArrowRight
                    size={15}
                    className="
                        text-[#1261c9]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                    "
                />
                Request a Quote
            </Link>
        </li>


        {/* Contact Us */}
        <li>
            <Link
                href="/contact"
                className="
                    group
                    flex
                    items-center
                    gap-3
                    text-[14px]
                    text-[#53617b]
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-[#1261c9]
                "
            >
                <ArrowRight
                    size={15}
                    className="
                        text-[#1261c9]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                    "
                />
                Contact Us
            </Link>
        </li>


        {/* Testimonials */}
        <li>
            <Link
                href="/testimonials"
                className="
                    group
                    flex
                    items-center
                    gap-3
                    text-[14px]
                    text-[#53617b]
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-[#1261c9]
                "
            >
                <ArrowRight
                    size={15}
                    className="
                        text-[#1261c9]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                    "
                />
                Testimonials
            </Link>
        </li>


        {/* How It Works */}
        <li>
            <Link
                href="/how-it-works"
                className="
                    group
                    flex
                    items-center
                    gap-3
                    text-[14px]
                    text-[#53617b]
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-[#1261c9]
                "
            >
                <ArrowRight
                    size={15}
                    className="
                        text-[#1261c9]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                    "
                />
                How It Works
            </Link>
        </li>

    </ul>
</div>

                        {/* ================= SERVICES ================= */}

                        <div
                            className="
                                border-b
                                border-[#e4e8ef]
                                p-7
                                sm:p-8
                                lg:border-b-0
                                lg:border-r
                            "
                        >

                            <h3
                                className="
                                    text-[15px]
                                    font-bold
                                    tracking-[2px]
                                    text-[#17213f]
                                "
                            >
                                OUR SERVICES
                            </h3>

                            <div className="mt-4 h-[3px] w-10 bg-[#62a843]" />

                            <ul className="mt-6 space-y-3.5">

                                <li>
                                    <a
                                        href="#"
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-3
                                            text-[14px]
                                            text-[#53617b]
                                            transition-all
                                            duration-300
                                            hover:translate-x-1
                                            hover:text-[#101f55]
                                        "
                                    >
                                        <span
                                            className="
                                                flex
                                                h-7
                                                w-7
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-lg
                                                bg-[#eef8e9]
                                                text-[#62a843]
                                                transition-all
                                                duration-300
                                                group-hover:bg-[#62a843]
                                                group-hover:text-white
                                            "
                                        >
                                            <Globe size={14} />
                                        </span>

                                        Website Development
                                    </a>
                                </li>


                                <li>
                                    <a
                                        href="#"
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-3
                                            text-[14px]
                                            text-[#53617b]
                                            transition-all
                                            duration-300
                                            hover:translate-x-1
                                            hover:text-[#101f55]
                                        "
                                    >
                                        <span
                                            className="
                                                flex
                                                h-7
                                                w-7
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-lg
                                                bg-[#eef8e9]
                                                text-[#62a843]
                                                transition-all
                                                duration-300
                                                group-hover:bg-[#62a843]
                                                group-hover:text-white
                                            "
                                        >
                                            <ShoppingCart size={14} />
                                        </span>

                                        E-Commerce Development
                                    </a>
                                </li>


                                <li>
                                    <a
                                        href="#"
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-3
                                            text-[14px]
                                            text-[#53617b]
                                            transition-all
                                            duration-300
                                            hover:translate-x-1
                                            hover:text-[#101f55]
                                        "
                                    >
                                        <span
                                            className="
                                                flex
                                                h-7
                                                w-7
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-lg
                                                bg-[#eef8e9]
                                                text-[#62a843]
                                                transition-all
                                                duration-300
                                                group-hover:bg-[#62a843]
                                                group-hover:text-white
                                            "
                                        >
                                            <Code2 size={14} />
                                        </span>

                                        Custom Web Applications
                                    </a>
                                </li>


                                <li>
                                    <a
                                        href="#"
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-3
                                            text-[14px]
                                            text-[#53617b]
                                            transition-all
                                            duration-300
                                            hover:translate-x-1
                                            hover:text-[#101f55]
                                        "
                                    >
                                        <span
                                            className="
                                                flex
                                                h-7
                                                w-7
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-lg
                                                bg-[#eef8e9]
                                                text-[#62a843]
                                                transition-all
                                                duration-300
                                                group-hover:bg-[#62a843]
                                                group-hover:text-white
                                            "
                                        >
                                            <MonitorCog size={14} />
                                        </span>

                                        CRM, LMS & Dashboards
                                    </a>
                                </li>


                                <li>
                                    <a
                                        href="#"
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-3
                                            text-[14px]
                                            text-[#53617b]
                                            transition-all
                                            duration-300
                                            hover:translate-x-1
                                            hover:text-[#101f55]
                                        "
                                    >
                                        <span
                                            className="
                                                flex
                                                h-7
                                                w-7
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-lg
                                                bg-[#eef8e9]
                                                text-[#62a843]
                                                transition-all
                                                duration-300
                                                group-hover:bg-[#62a843]
                                                group-hover:text-white
                                            "
                                        >
                                            <Palette size={14} />
                                        </span>

                                        Graphic & UI/UX Design
                                    </a>
                                </li>


                                <li>
                                    <a
                                        href="#"
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-3
                                            text-[14px]
                                            text-[#53617b]
                                            transition-all
                                            duration-300
                                            hover:translate-x-1
                                            hover:text-[#101f55]
                                        "
                                    >
                                        <span
                                            className="
                                                flex
                                                h-7
                                                w-7
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-lg
                                                bg-[#eef8e9]
                                                text-[#62a843]
                                                transition-all
                                                duration-300
                                                group-hover:bg-[#62a843]
                                                group-hover:text-white
                                            "
                                        >
                                            <Video size={14} />
                                        </span>

                                        Video Editing & Creative
                                    </a>
                                </li>


                                <li>
                                    <a
                                        href="#"
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-3
                                            text-[14px]
                                            text-[#53617b]
                                            transition-all
                                            duration-300
                                            hover:translate-x-1
                                            hover:text-[#101f55]
                                        "
                                    >
                                        <span
                                            className="
                                                flex
                                                h-7
                                                w-7
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-lg
                                                bg-[#eef8e9]
                                                text-[#62a843]
                                                transition-all
                                                duration-300
                                                group-hover:bg-[#62a843]
                                                group-hover:text-white
                                            "
                                        >
                                            <Search size={14} />
                                        </span>

                                        SEO & Digital Marketing
                                    </a>
                                </li>

                            </ul>

                        </div>


                        {/* ================= CONTACT INFO ================= */}

                        <div className="p-7 sm:p-8">

                            <h3
                                className="
                                    text-[15px]
                                    font-bold
                                    tracking-[2px]
                                    text-[#17213f]
                                "
                            >
                                CONTACT INFO
                            </h3>

                            <div className="mt-4 h-[3px] w-10 bg-[#1261c9]" />

                            <div className="mt-6 space-y-5">

                                {/* PHONE */}

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#eaf2ff]
                                            text-[#1261c9]
                                        "
                                    >
                                        <Phone size={18} />
                                    </div>

                                    <div>

                                        <p className="text-[11px] font-bold tracking-wide text-[#7a879b]">
                                            CALL US
                                        </p>

                                        <a
                                            href="tel:+91XXXXXXXXXX"
                                            className="
                                                mt-1
                                                block
                                                text-[14px]
                                                text-[#53617b]
                                                transition
                                                hover:text-[#1261c9]
                                            "
                                        >
                                            +91 7497817973 <br />
                                            +91  9217615261
                                        </a>

                                    </div>

                                </div>


                                {/* EMAIL */}

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#eaf2ff]
                                            text-[#1261c9]
                                        "
                                    >
                                        <Mail size={18} />
                                    </div>

                                    <div>

                                        <p className="text-[11px] font-bold tracking-wide text-[#7a879b]">
                                            EMAIL US
                                        </p>

                                        <a
                                            href="mailto:info@ansainnovations.com"
                                            className="
                                                mt-1
                                                block
                                                break-all
                                                text-[14px]
                                                text-[#53617b]
                                                transition
                                                hover:text-[#1261c9]
                                            "
                                        >
                                            info@ansainnovations.com
                                        </a>

                                    </div>

                                </div>


                                {/* LOCATION */}

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#eef8e9]
                                            text-[#62a843]
                                        "
                                    >
                                        <MapPin size={18} />
                                    </div>

                                    <div>

                                        <p className="text-[11px] font-bold tracking-wide text-[#7a879b]">
                                            LOCATION
                                        </p>

                                        <p className="mt-1 text-[14px] text-[#53617b]">
                                            311/2, Delhi Rd, Anamika Enclave, Sector 14, Gurugram, Haryana 122022
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= BOTTOM BAR ================= */}

                <div
                    className="
                        mt-5
                        flex
                        flex-col
                        items-center
                        justify-between
                        gap-3
                        border-t
                        border-white/10
                        pt-5
                        text-center
                        sm:flex-row
                        sm:text-left
                    "
                >

                    <p className="text-[12px] text-[#aeb9ca]">
                        © {new Date().getFullYear()} ANSA Innovations.
                        All Rights Reserved.
                    </p>


                    <div className="flex items-center gap-5">

                        <Link
                            href="/privacy-policy"
                            className="
                                text-[12px]
                                text-[#aeb9ca]
                                transition
                                hover:text-white
                            "
                        >
                            Privacy Policy
                        </Link>


                        <Link
                            href="/terms"
                            className="
                                text-[12px]
                                text-[#aeb9ca]
                                transition
                                hover:text-white
                            "
                        >
                            Terms & Conditions
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
}