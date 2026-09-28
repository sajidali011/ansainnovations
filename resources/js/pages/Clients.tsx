import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, HeartHandshake, Briefcase, Globe2, Award } from "lucide-react";

// ---- Swap these for your real client logo images ----
// Each entry can just be: { logo: <img src="/logos/client.svg" alt="Client name" className="h-8 sm:h-10 w-auto" /> }
type ClientLogo = {
  name: string;
};

const clientLogos: ClientLogo[] = [
  { name: "Northpeak" },
  { name: "Vertex" },
  { name: "Bluewave" },
  { name: "Apexcorp" },
  { name: "Lumen" },
  { name: "Stratus" },
  { name: "Orbital" },
  { name: "Gridline" },
  { name: "Nova" },
];

type Stat = {
  icon: typeof HeartHandshake;
  value: string;
  label: string;
  iconBg: string;
};

const stats: Stat[] = [
  { icon: HeartHandshake, value: "150+", label: "Happy Clients", iconBg: "bg-blue-600" },
  { icon: Briefcase, value: "250+", label: "Projects Delivered", iconBg: "bg-teal-500" },
  { icon: Globe2, value: "20+", label: "Countries Served", iconBg: "bg-green-500" },
  { icon: Award, value: "98%", label: "Client Satisfaction", iconBg: "bg-lime-500" },
];

/** Fires once when the element scrolls into view — used for the staggered logo reveal. */
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

function LogoCard({ name, delay }: { name: string; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center h-24 sm:h-28 rounded-2xl bg-white shadow-sm shadow-slate-900/5 ring-1 ring-slate-100 transition-all duration-700 ease-out hover:shadow-md hover:-translate-y-0.5 ${
        inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-400 select-none">
        {name}
      </span>
    </div>
  );
}

/** Small decorative dot-grid used near the heading and above the logo grid. */
function DotGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="112"
      height="72"
      viewBox="0 0 112 72"
      fill="none"
    >
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 9 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={8 + col * 12}
            cy={8 + row * 12}
            r="2.5"
            className="fill-slate-300"
          />
        ))
      )}
    </svg>
  );
}

export default function Clients() {
  return (
    <section aria-labelledby="clients-heading" className="relative bg-[#F7F9FC] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-20 sm:pt-24 lg:pt-28 pb-16">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <DotGrid className="hidden lg:block absolute -top-10 right-[38%] opacity-70" />

          {/* ---------------- Content ---------------- */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-emerald-600 uppercase">
              Our Clients
            </span>
            <span className="block w-10 h-1 rounded-full bg-emerald-500 mt-2 mb-5" aria-hidden="true" />

            <h2
              id="clients-heading"
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] text-slate-900"
            >
              Not just clients,
              <br />
              they are
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                more like partners
              </span>
            </h2>

            <p className="mt-5 text-slate-500 text-base sm:text-lg leading-relaxed max-w-md">
              We take pride in building long-term relationships with amazing
              brands and organizations around the world.
            </p>

            <a
              href="#clients"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 pl-2 pr-6 py-2 text-white font-semibold shadow-lg shadow-blue-600/20 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20">
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
              View Our Clients
            </a>
          </div>

          {/* ---------------- Logo grid ---------------- */}
          <div className="relative">
            <DotGrid className="hidden sm:block absolute -bottom-10 -left-10 opacity-60" />
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {clientLogos.map((client, index) => (
                <LogoCard key={client.name} name={client.name} delay={index * 90} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Wave divider + stats ---------------- */}
      <div className="relative">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-40 sm:h-56 md:h-64 block"
        >
          <defs>
            <linearGradient id="clientsWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="55%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>
          </defs>
          <path
            fill="url(#clientsWaveGradient)"
            fillOpacity="0.9"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L0,320Z"
          />
          <circle cx="140" cy="215" r="6" className="fill-blue-800/70 animate-pulse" />
          <circle cx="860" cy="185" r="6" className="fill-green-800/50 animate-pulse" />
          <circle cx="1345" cy="205" r="6" className="fill-green-800/50 animate-pulse" />
        </svg>

        <div className="absolute inset-x-0 bottom-0 sm:bottom-4 lg:bottom-8 px-4 sm:px-8">
          <div className="mx-auto max-w-5xl bg-white rounded-3xl shadow-2xl shadow-slate-900/10 px-6 sm:px-10 py-6 sm:py-8">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
              {stats.map(({ icon: Icon, value, label, iconBg }) => (
                <div key={label} className="flex items-center gap-3">
                  <span
                    className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full text-white shrink-0 ${iconBg}`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="sr-only">{label}</dt>
                    <dd className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-none">
                      {value}
                    </dd>
                    <dd className="text-xs sm:text-sm text-slate-500 mt-1">{label}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="h-16 sm:h-10" aria-hidden="true" />
    </section>
  );
}