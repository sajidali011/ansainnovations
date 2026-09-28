import { Head } from '@inertiajs/react';
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from './About';
import Clients from "./Clients";


import {
    Users,
    TrendingUp,
    Layers,
    BarChart3,
    Building2,
    ShieldCheck,
} from "lucide-react";

/* =========================================================================
   WHY CHOOSE US — types, data, hooks and sub-components
   (kept in this file as requested — no separate page/component file)
   ========================================================================= */

type WhyFeature = {
    icon: typeof Users;
    title: string;
    desc: string;
    highlighted?: boolean;
};

const whyFeatures: WhyFeature[] = [
    {
        icon: Users,
        title: "Senior Team, No Hand-offs",
        desc: "You work directly with senior strategists, not junior account managers. Every project is led by experts with 10+ years of experience.",
        highlighted: true,
    },
    {
        icon: TrendingUp,
        title: "Revenue-Focused, Not Vanity Metrics",
        desc: "We tie every activity to real business outcomes — leads, conversions, and ROI. You always know what your investment is returning.",
    },
    {
        icon: Layers,
        title: "Full-Service Under One Roof",
        desc: "Web development, SEO, PPC, and social media — all in-house. No juggling multiple vendors, no finger-pointing, one accountable team.",
    },
    {
        icon: BarChart3,
        title: "Transparent Reporting",
        desc: "Live dashboards and monthly reports. You see exactly what's been done, what's in progress, and what it's delivering.",
    },
    {
        icon: Building2,
        title: "Proven Across Industries",
        desc: "From education to real estate to e-commerce, we bring deep experience in your market and the patterns that drive growth.",
    },
    {
        icon: ShieldCheck,
        title: "No Long-Term Lock-in",
        desc: "We earn your business every month with results, not lock-in clauses. You stay because it works, not because you have to.",
    },
];

/** Fires once when the element scrolls into view — used for the staggered card reveal. */
function useInView<T extends HTMLElement>(threshold = 0.2) {
    const ref = useRef<T | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
}

function WhyFeatureCard({ feature, delay }: { feature: WhyFeature; delay: number }) {
    const { ref, inView } = useInView<HTMLDivElement>();
    const Icon = feature.icon;

    return (
        <div
            ref={ref}
            className={`
                why-card
                group relative rounded-2xl bg-white p-6 sm:p-7 overflow-hidden
                transition-all duration-500 ease-out hover:-translate-y-1
                ${
                    feature.highlighted
                        ? "ring-1 ring-[#c7d7f7] shadow-md shadow-[#101f55]/5"
                        : "ring-1 ring-slate-100 shadow-sm hover:shadow-md hover:ring-slate-200"
                }
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Soft auto-cycling background glow, sits behind everything in the card */}
            <span className="why-card-glow pointer-events-none absolute inset-0 rounded-2xl" />

            {/* Top gradient bar — ab sabhi cards pe hamesha visible + apne aap continuously pulse karti hai */}
            <span className="why-card-topbar absolute -top-px left-6 right-6 h-1 rounded-b-full bg-gradient-to-r from-[#1261c9] to-[#62a843]" />

            {feature.highlighted ? (
                <span className="why-card-icon relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#1261c9] to-[#62a843] text-white shadow-sm shadow-[#1261c9]/30">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
            ) : (
                <span className="why-card-icon relative inline-flex items-center justify-center w-11 h-11 text-[#101f55] transition-colors group-hover:text-[#62a843]">
                    <Icon className="w-7 h-7" strokeWidth={1.75} aria-hidden="true" />
                </span>
            )}

            <h3 className="relative mt-4 font-bold tracking-[-0.2px] text-[#101f55] text-base sm:text-lg">
                {feature.title}
            </h3>
            <p className="relative mt-2 text-base text-[#53617b] leading-relaxed">
                {feature.desc}
            </p>
        </div>
    );
}

/** Soft organic blob used as background decoration in the corners. */
function WhyBlob({ className, colorClass }: { className: string; colorClass: string }) {
    return (
        <svg
            aria-hidden="true"
            className={`why-blob absolute pointer-events-none ${className} ${colorClass}`}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="currentColor"
                d="M45.4,-58.5C58.8,-49.6,69.5,-35.3,73.9,-19.2C78.3,-3.1,76.4,14.9,68.7,29.8C61,44.8,47.5,56.7,32.1,64.1C16.7,71.5,-0.7,74.4,-17.4,71C-34.1,67.6,-50.1,57.8,-60.5,43.7C-70.9,29.5,-75.7,11,-73.4,-6.1C-71.1,-23.1,-61.7,-38.7,-48.5,-47.9C-35.3,-57.1,-17.6,-59.8,-0.4,-59.3C16.9,-58.7,33.9,-56,45.4,-58.5Z"
                transform="translate(100 100)"
            />
        </svg>
    );
}

function WhyChooseUs() {
    return (
        <section
            aria-labelledby="why-choose-us-heading"
            className="relative bg-white overflow-hidden py-20 sm:py-24"
        >
            <style>{`
    @media (prefers-reduced-motion: no-preference) {

        .why-blob {
            animation: whyBlobFloat 9s ease-in-out infinite;
        }

        .why-card {
            animation: whyCardTopbarGlow 4s ease-in-out infinite;
        }

        .why-card-topbar {
            animation: whyTopbarPulse 3.2s ease-in-out infinite;
        }

        .why-card-icon {
            animation: whyIconPulse 3.2s ease-in-out infinite;
        }

        .why-card-glow {
            animation: whyGlowCycle 6s ease-in-out infinite;
        }

        .why-card:hover {
            animation: whyCardFloat 1.8s ease-in-out infinite;
        }

        .why-card:hover .why-card-icon {
            animation: whyIconPulse 1.4s ease-in-out infinite;
        }

        .why-card:hover .why-card-topbar {
            animation: whyTopbarPulse 1.6s ease-in-out infinite;
        }

        .why-card:hover .why-card-glow {
            animation: whyGlowCycle 2.6s ease-in-out infinite;
        }

    }

    @keyframes whyBlobFloat {
        0%, 100% {
            transform: scale(1) translateY(0px);
        }

        50% {
            transform: scale(1.06) translateY(-10px);
        }
    }

    @keyframes whyCardFloat {

        0%, 100% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(-8px);
        }

    }

    @keyframes whyIconPulse {

        0%, 100% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.1) rotate(2deg);
        }

    }

    @keyframes whyTopbarPulse {

        0%, 100% {
            transform: scaleX(1);
            opacity: 1;
        }

        50% {
            transform: scaleX(0.85);
            opacity: 0.6;
        }

    }

    @keyframes whyGlowCycle {

        0%, 100% {
            background: radial-gradient(120% 100% at 0% 0%, rgba(18,97,201,0.06), transparent 60%);
        }

        50% {
            background: radial-gradient(120% 100% at 100% 0%, rgba(98,168,67,0.08), transparent 60%);
        }

    }

    @keyframes whyCardTopbarGlow {

        0%, 100% {
            box-shadow: 0 0 0 rgba(18,97,201,0);
        }

        50% {
            box-shadow: 0 8px 24px -12px rgba(18,97,201,0.18);
        }

    }
`}</style>

            <WhyBlob
                className="w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px] -top-16 -right-20 sm:-top-20 sm:-right-24 lg:-top-24 lg:-right-28"
                colorClass="text-[#62a843]/90"
            />
            <WhyBlob
                className="w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] -bottom-16 -left-16 sm:-bottom-24 sm:-left-20 lg:-bottom-28 lg:-left-24"
                colorClass="text-[#1a6b3f]/85"
            />

           <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[2.5px] text-[#e94f8a] uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e94f8a]" aria-hidden="true" />
                        Why Choose Us
                    </span>

                    <h2
                        id="why-choose-us-heading"
                       className="mt-3 text-[34px] sm:text-5xl lg:text-[50px] font-bold tracking-[-1px] text-[#101f55]"
                    >
                        The Ansa Innovations Advantage
                    </h2>

                   <p className="mt-4 text-[#53617b] text-lg sm:text-xl leading-relaxed">
    We're not just another agency. We're your growth partner — senior
    team, results focus, full-service execution, and transparent
    reporting.
</p>
                </div>

                <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {whyFeatures.map((feature, index) => (
                        <WhyFeatureCard key={feature.title} feature={feature} delay={index * 80} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* =========================================================================
   HOME PAGE
   ========================================================================= */

export default function Home() {
    return (
        <>
            <Head>
                <title>Web Development Company | Websites, Web Apps & Digital Solutions</title>

                <meta
                    name="description"
                    content="ANSA Innovations is a web development company offering custom websites, web applications, e-commerce solutions and digital services to help businesses grow online."
                />

                <meta
                    name="keywords"
                    content="web development company, website development, custom web applications, e-commerce development, React development, PHP development, digital solutions"
                />
            </Head>

            <Header />

            <main className="min-h-screen border-l-8 border-[#0b5bd3] bg-white">

                {/* ================= HERO SECTION ================= */}
                <section
                    className="
                        relative overflow-hidden
                        bg-[linear-gradient(to_right,#d7e0eb_1px,transparent_1px),linear-gradient(to_bottom,#d7e0eb_1px,transparent_1px)]
                        bg-[size:60px_60px]
                        px-6 py-12
                        sm:px-10
                        lg:px-20
                        lg:py-20
                    "
                >

                    <div className="mx-auto grid max-w-[1750px] grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_0.98fr] lg:gap-20">

                        {/* ================= LEFT CONTENT ================= */}
                        <div className="pt-2 lg:pt-3">

                            <h1
                                className="
                                    max-w-[650px]
                                    text-[40px]
                                    font-bold
                                    leading-[1.05]
                                    tracking-[-1.5px]
                                    text-[#101f55]
                                    sm:text-[48px]
                                    lg:text-[56px]
                                    xl:text-[60px]
                                "
                            >
                                Web Development
                                <br />

                                <span>
                                    That Builds
                                </span>

                                <br />

                               <span
    className="
        relative
        inline-block
        bg-gradient-to-r
        from-[#1261c9]
        via-[#2874d0]
        to-[#62a843]
        bg-clip-text
        text-transparent
        after:absolute
        after:bottom-[-6px]
        after:left-0
        after:h-[4px]
        after:w-full
        after:bg-[#62a843]
        after:content-['']
    "
>
    Digital Success
</span>
                            </h1>


                            {/* DESCRIPTION */}
                            <p
                                className="
                                    mt-8
                                    max-w-[600px]
                                    text-[16px]
                                    font-normal
                                    leading-[1.7]
                                    text-[#53617b]
                                    sm:text-[17px]
                                "
                            >
                                We build modern, high-performance websites and
                                custom web applications designed to help
                                businesses establish a strong online presence,
                                streamline operations and achieve long-term
                                digital growth.
                            </p>


                            {/* ================= TRUST POINTS ================= */}
                            <div
                                className="
                                    mt-7
                                    flex
                                    flex-wrap
                                    gap-x-7
                                    gap-y-3
                                    text-[14px]
                                    font-medium
                                    text-[#38445e]
                                    sm:text-[15px]
                                "
                            >

                                <div className="flex items-center gap-2">
                                    <span
                                        className="
                                            flex h-5 w-5 items-center justify-center
                                            rounded-full border-2 border-[#62b83f]
                                            text-[10px] font-bold text-[#62b83f]
                                        "
                                    >
                                        ✓
                                    </span>

                                    <span>Custom Web Development</span>
                                </div>


                                <div className="flex items-center gap-2">
                                    <span
                                        className="
                                            flex h-5 w-5 items-center justify-center
                                            rounded-full border-2 border-[#62b83f]
                                            text-[10px] font-bold text-[#62b83f]
                                        "
                                    >
                                        ✓
                                    </span>

                                    <span>Modern & Scalable Solutions</span>
                                </div>


                                <div className="flex items-center gap-2">
                                    <span
                                        className="
                                            flex h-5 w-5 items-center justify-center
                                            rounded-full border-2 border-[#62b83f]
                                            text-[10px] font-bold text-[#62b83f]
                                        "
                                    >
                                        ✓
                                    </span>

                                    <span>Business-Focused Strategy</span>
                                </div>

                            </div>


                            {/* ================= CTA ================= */}
                            <a
                                href="#contact"
                                className="
                                    mt-10
                                    inline-flex
                                    items-center
                                    gap-5
                                    border-2
                                    border-[#101f55]
                                    bg-white
                                    px-8
                                    py-4
                                    text-[15px]
                                    font-semibold
                                    text-[#101f55]
                                    transition-all
                                    duration-300
                                    hover:bg-[#101f55]
                                    hover:text-white
                                "
                            >
                                Explore Our Services

                                <span className="text-xl leading-none">
                                    →
                                </span>
                            </a>


                            <div className="mt-14 h-[2px] max-w-[805px] bg-[#d5dce5]" />

                        </div>


                        {/* ================= RIGHT FORM ================= */}
                        <div
                            id="contact"
                            className="
                                overflow-hidden
                                bg-white
                                shadow-[0_18px_55px_rgba(16,31,85,0.12)]
                            "
                        >

                            {/* ================= FORM HEADER ================= */}
                            <div
                                className="
                                    border-t-[5px]
                                    border-[#62a843]
                                    bg-[#101f55]
                                    px-8
                                    py-7
                                    sm:px-10
                                    sm:py-8
                                "
                            >

                                <p
                                    className="
                                        text-[12px]
                                        font-bold
                                        tracking-[2.5px]
                                        text-[#65bd42]
                                    "
                                >
                                    FREE PROJECT CONSULTATION
                                </p>


                                <h2
                                    className="
                                        mt-3
                                        text-[24px]
                                        font-bold
                                        leading-tight
                                        text-white
                                        sm:text-[27px]
                                    "
                                >
                                    Let's Build Something Great
                                </h2>


                                <p
                                    className="
                                        mt-3
                                        text-[14px]
                                        leading-6
                                        text-[#d9e0f0]
                                    "
                                >
                                    Tell us about your project and requirements —
                                    our development team will get back to you
                                    with the right solution.
                                </p>

                            </div>


                            {/* ================= FORM ================= */}
                            <form className="px-8 py-8 sm:px-10 sm:py-9">

                                {/* NAME + COMPANY */}
                                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">

                                    {/* NAME */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="sr-only"
                                        >
                                            Full Name
                                        </label>

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                border-b-2
                                                border-[#dce2eb]
                                                pb-3
                                                transition
                                                focus-within:border-[#101f55]
                                            "
                                        >

                                            <svg
                                                width="19"
                                                height="19"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                className="text-[#9aabc4]"
                                            >
                                                <circle cx="12" cy="8" r="4" />
                                                <path d="M4 21c.8-4 3.5-6 8-6s7.2 2 8 6" />
                                            </svg>


                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Full name"
                                                className="
                                                    w-full
                                                    border-0
                                                    bg-transparent
                                                    text-[14px]
                                                    text-[#17213f]
                                                    outline-none
                                                    placeholder:text-[#93a4bd]
                                                "
                                            />

                                        </div>
                                    </div>


                                    {/* COMPANY */}
                                    <div>
                                        <label
                                            htmlFor="company"
                                            className="sr-only"
                                        >
                                            Company Name
                                        </label>

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                border-b-2
                                                border-[#dce2eb]
                                                pb-3
                                                transition
                                                focus-within:border-[#101f55]
                                            "
                                        >

                                            <svg
                                                width="19"
                                                height="19"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                className="text-[#9aabc4]"
                                            >
                                                <path d="M4 21h16" />
                                                <path d="M6 21V5h12v16" />
                                                <path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2" />
                                            </svg>


                                            <input
                                                id="company"
                                                name="company"
                                                type="text"
                                                placeholder="Company name"
                                                className="
                                                    w-full
                                                    border-0
                                                    bg-transparent
                                                    text-[14px]
                                                    outline-none
                                                    placeholder:text-[#93a4bd]
                                                "
                                            />

                                        </div>
                                    </div>

                                </div>


                                {/* EMAIL + PHONE */}
                                <div className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2">

                                    {/* EMAIL */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="sr-only"
                                        >
                                            Work Email
                                        </label>

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                border-b-2
                                                border-[#dce2eb]
                                                pb-3
                                                transition
                                                focus-within:border-[#101f55]
                                            "
                                        >

                                            <svg
                                                width="19"
                                                height="19"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                className="text-[#9aabc4]"
                                            >
                                                <rect
                                                    x="3"
                                                    y="5"
                                                    width="18"
                                                    height="14"
                                                    rx="2"
                                                />
                                                <path d="m3 7 9 6 9-6" />
                                            </svg>


                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Work email"
                                                className="
                                                    w-full
                                                    border-0
                                                    bg-transparent
                                                    text-[14px]
                                                    outline-none
                                                    placeholder:text-[#93a4bd]
                                                "
                                            />

                                        </div>
                                    </div>


                                    {/* PHONE */}
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="sr-only"
                                        >
                                            Phone Number
                                        </label>

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                border-b-2
                                                border-[#dce2eb]
                                                pb-3
                                                transition
                                                focus-within:border-[#101f55]
                                            "
                                        >

                                            <svg
                                                width="19"
                                                height="19"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                className="text-[#9aabc4]"
                                            >
                                                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
                                            </svg>


                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="Phone number"
                                                className="
                                                    w-full
                                                    border-0
                                                    bg-transparent
                                                    text-[14px]
                                                    outline-none
                                                    placeholder:text-[#93a4bd]
                                                "
                                            />

                                        </div>
                                    </div>

                                </div>


                                {/* SERVICE */}
                                <div className="mt-8">

                                    <label
                                        htmlFor="service"
                                        className="sr-only"
                                    >
                                        Select Service
                                    </label>

                                    <div
                                        className="
                                            relative
                                            border-b-2
                                            border-[#dce2eb]
                                        "
                                    >

                                        <select
                                            id="service"
                                            name="service"
                                            defaultValue=""
                                            className="
                                                w-full
                                                appearance-none
                                                bg-transparent
                                                py-2
                                                pr-8
                                                text-[14px]
                                                text-[#26324e]
                                                outline-none
                                            "
                                        >

                                           <option value="" disabled>
    Service you're interested in
</option>

{/* ================= WEB DEVELOPMENT ================= */}

<option value="business-website">
    Business Website Development
</option>

<option value="ecommerce">
    E-Commerce Development
</option>

<option value="web-application">
    Custom Web Application
</option>

<option value="dashboard">
    CRM, LMS & Admin Dashboard
</option>

<option value="landing-page">
    Landing Page Development
</option>

<option value="website-redesign">
    Website Redesign
</option>

<option value="website-maintenance">
    Website Maintenance & Support
</option>


{/* ================= DESIGN SERVICES ================= */}

<option value="graphic-designing">
    Graphic Designing
</option>

<option value="logo-design">
    Logo & Brand Identity Design
</option>

<option value="ui-ux-design">
    UI/UX Design
</option>

<option value="social-media-design">
    Social Media Creatives
</option>

<option value="banner-design">
    Banner & Advertisement Design
</option>


{/* ================= VIDEO SERVICES ================= */}

<option value="video-editing">
    Video Editing
</option>

<option value="reels-editing">
    Reels & Short Video Editing
</option>

<option value="youtube-editing">
    YouTube Video Editing
</option>

<option value="motion-graphics">
    Motion Graphics & Animation
</option>


{/* ================= DIGITAL MARKETING ================= */}

<option value="seo">
    SEO & Organic Growth
</option>

<option value="google-ads">
    Google Ads & PPC
</option>

<option value="social-media-marketing">
    Social Media Marketing
</option>

<option value="content-marketing">
    Content Marketing
</option>

<option value="digital-marketing">
    Complete Digital Marketing
</option>


{/* ================= OTHER ================= */}

<option value="other">
    Other / Custom Requirement
</option>
                                        </select>


                                        <span
                                            className="
                                                pointer-events-none
                                                absolute
                                                right-1
                                                top-1/2
                                                -translate-y-1/2
                                                text-[#94a5bd]
                                            "
                                        >
                                            ▾
                                        </span>

                                    </div>

                                </div>


                                {/* MESSAGE */}
                                <div className="mt-8">

                                    <label
                                        htmlFor="message"
                                        className="sr-only"
                                    >
                                        Tell us about your project
                                    </label>

                                    <div
                                        className="
                                            flex
                                            items-start
                                            gap-3
                                            border-b-2
                                            border-[#dce2eb]
                                            pb-3
                                            transition
                                            focus-within:border-[#101f55]
                                        "
                                    >

                                        <svg
                                            width="19"
                                            height="19"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            className="mt-1 text-[#9aabc4]"
                                        >
                                            <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.5 9.5 0 0 1-3.8-.8L3 21l1.9-4.8A8.4 8.4 0 0 1 3 11.5a9 9 0 1 1 18 0Z" />
                                        </svg>


                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={3}
                                            placeholder="Tell us about your project"
                                            className="
                                                w-full
                                                resize-none
                                                border-0
                                                bg-transparent
                                                text-[14px]
                                                leading-6
                                                outline-none
                                                placeholder:text-[#93a4bd]
                                            "
                                        />

                                    </div>

                                </div>


                                {/* ================= SUBMIT ================= */}
                                <button
                                    type="submit"
                                    className="
                                        mt-8
                                        flex
                                        w-full
                                        items-center
                                        justify-center
                                        gap-4
                                        bg-[#101f55]
                                        px-6
                                        py-4
                                        text-[15px]
                                        font-semibold
                                        text-white
                                        transition-all
                                        duration-300
                                        hover:bg-[#172d72]
                                    "
                                >
                                    Start Your Project

                                    <span className="text-xl leading-none">
                                        →
                                    </span>
                                </button>

                            </form>

                        </div>

                    </div>

                </section>

                <About />
                
                <Clients />
            
                <WhyChooseUs />

            </main>

            <Footer />
        </>
    );
}