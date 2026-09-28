import React, { useEffect, useRef, useState } from "react";
import type { ComponentType, SVGProps } from "react";
import { Target, Award, Clock, Phone, ArrowRight } from "lucide-react";

// ---- Replace these with your real project photos ----
type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const images: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    alt: "Team brainstorming a marketing campaign",
    width: 640,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    alt: "Social media strategy discussion",
    width: 640,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    alt: "Developer working on a client website",
    width: 640,
    height: 640,
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    alt: "Client review meeting",
    width: 640,
    height: 640,
  },
];

type Feature = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: Target,
    title: "Guaranteed Results",
    desc: "We ensure measurable outcomes that drive your business towards real growth.",
  },
  {
    icon: Award,
    title: "Quality-First Delivery",
    desc: "Every project passes through the same care and review process — no shortcuts.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    desc: "Timelines are set upfront and tracked closely, so your launch date never slips.",
  },
];

/** True once viewport width crosses the desktop breakpoint (used to switch reveal strategy). */
function useIsDesktop(breakpoint = 1024): boolean {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    () => typeof window !== "undefined" && window.innerWidth >= breakpoint
  );

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= breakpoint);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isDesktop;
}

/** Respects the OS-level "reduce motion" accessibility setting. */
function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const handler = () => setReduced(query.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return reduced;
}

/** Fires once when the element scrolls into view — used for the simple mobile reveal. */
function useInView<T extends HTMLElement>(threshold = 0.3) {
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

export default function About() {
  const trackRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  const isDesktop = useIsDesktop();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Fixed number of hooks (4 images) — safe to call individually, not in a loop.
  const view0 = useInView<HTMLDivElement>();
  const view1 = useInView<HTMLDivElement>();
  const view2 = useInView<HTMLDivElement>();
  const view3 = useInView<HTMLDivElement>();
  const mobileViews = [view0, view1, view2, view3];

  // Desktop only: track scroll progress through the pinned section.
  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      const el = trackRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollableHeight = el.offsetHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const scrolled = -rect.top;
      const p = Math.min(Math.max(scrolled / scrollableHeight, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isDesktop]);

  // Each image "arrives" at its own scroll threshold on desktop, staggered one after another.
  const thresholds = [0.08, 0.3, 0.52, 0.74];
  const revealSpan = 0.24;
  const lastThresholdEnd = thresholds[thresholds.length - 1] + revealSpan;

  const getDesktopImageStyle = (index: number): React.CSSProperties => {
    if (prefersReducedMotion) {
      return { opacity: 1, transform: "none" };
    }
    const start = thresholds[index];
    const local = Math.min(Math.max((progress - start) / revealSpan, 0), 1);
    const eased = local * local * (3 - 2 * local); // smoothstep

    return {
      opacity: eased,
      transform: `translateY(${(1 - eased) * 48}px) scale(${0.88 + eased * 0.12})`,
      transition: "opacity 0.1s linear, transform 0.1s linear",
    };
  };

  const mobileRevealClass = (visible: boolean) =>
    prefersReducedMotion || visible
      ? "opacity-100 translate-y-0 scale-100"
      : "opacity-0 translate-y-8 scale-95";

  const allDesktopImagesRevealed = progress >= lastThresholdEnd * 0.9;
  const allMobileImagesRevealed = mobileViews.every((v) => v.inView);
  const badgeVisible = isDesktop ? allDesktopImagesRevealed : allMobileImagesRevealed;

  return (
    <section
      ref={trackRef}
      aria-labelledby="about-heading"
      className="relative bg-[#FBFAF7] lg:h-[340vh]"
    >
      <div className="flex items-center py-16 sm:py-20 lg:py-0 lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* ---------------- Image grid (reveals on scroll) ---------------- */}
            <div className="order-2 lg:order-1">
              <div className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
                {images.map((image, index) => {
                  const view = mobileViews[index];
                  const marginClass =
                    index === 0
                      ? ""
                      : index === 1
                      ? "mt-6 sm:mt-10"
                      : index === 3
                      ? "mt-4 sm:mt-6"
                      : "";
                  const aspectClass =
                    index < 2 ? "aspect-[4/5]" : "aspect-square";

                  return (
                    <div
                      key={image.src}
                      ref={isDesktop ? undefined : view.ref}
                      className={`col-span-1 rounded-2xl overflow-hidden shadow-lg shadow-emerald-950/10 will-change-transform ${aspectClass} ${marginClass} ${
                        isDesktop
                          ? ""
                          : `transition-all duration-700 ease-out ${mobileRevealClass(
                              view.inView
                            )}`
                      }`}
                      style={
                        isDesktop
                          ? getDesktopImageStyle(index)
                          : {
                              transitionDelay: prefersReducedMotion
                                ? "0ms"
                                : `${index * 120}ms`,
                            }
                      }
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}

                {/* Signature element: floating experience badge */}
                <div
                  className={`hidden sm:flex absolute -bottom-5 -right-3 lg:-right-6 items-center gap-3 bg-white rounded-2xl shadow-xl shadow-emerald-950/10 px-5 py-4 transition-all duration-700 ease-out ${
                    badgeVisible || prefersReducedMotion
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-4 scale-90"
                  }`}
                >
                  <span className="text-2xl font-extrabold text-emerald-700">
                    2+
                  </span>
                  <span className="text-xs font-semibold text-slate-600 leading-tight max-w-[6rem]">
                    Years of trusted Web experience
                  </span>
                </div>
              </div>

              {/* progress dots — subtle scroll feedback, desktop only */}
              <div className="hidden lg:flex items-center gap-2 mt-6" aria-hidden="true">
                {thresholds.map((t, i) => {
                  const local = Math.min(
                    Math.max((progress - t) / revealSpan, 0),
                    1
                  );
                  return (
                    <span
                      key={t}
                      className="h-1.5 rounded-full bg-emerald-600 transition-all duration-300"
                      style={{
                        width: local > 0.05 ? "28px" : "10px",
                        opacity: local > 0.05 ? 1 : 0.25,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* ---------------- Content (visible immediately) ---------------- */}
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-emerald-700 uppercase">
                <span className="w-6 h-px bg-emerald-600" aria-hidden="true" />
                About Our Agency
              </span>

              <h2
                id="about-heading"
                className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] text-slate-900"
              >
                2 Years of Building Digital
                <span className="text-emerald-700"> Growth for Real Brands</span>
              </h2>

              <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed">
                Web development is at the core of what we do — fast, modern
websites and web apps built to perform. We then use digital
marketing, including SEO, paid ads, and social media, to bring
the right audience. Graphic design and video editing complete
your brand presence across every platform.

              </p>

              <ul className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
                {features.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-4 py-4">
                    <span className="shrink-0 w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center">
                      <Icon
                        className="w-5 h-5 text-white"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>
                    <span>
                      <h3 className="font-semibold text-slate-900">
                        {title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">{desc}</p>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 active:bg-rose-700 transition-colors text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-rose-500/25"
                >
                  Discover More
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href="tel:+917497817973"
                  className="flex items-center gap-3 group"
                  aria-label="Call us at +91 7497817973"
                >
                  <span className="w-11 h-11 rounded-full bg-rose-500 flex items-center justify-center shrink-0 group-hover:bg-rose-600 transition-colors">
                    <Phone
                      className="w-4 h-4 text-white"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-sm">
                    <span className="block text-slate-500">Call anytime</span>
                    <span className="block font-semibold text-slate-900">
                      +91 7497817973
                    </span>
                  </span>
                </a>
              </div>

              <p
                className="lg:hidden text-xs text-slate-400 mt-6 transition-opacity duration-500"
                style={{ opacity: allMobileImagesRevealed ? 0 : 1 }}
              >
                Scroll to see our work ↓
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}