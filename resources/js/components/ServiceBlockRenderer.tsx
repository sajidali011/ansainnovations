import React from "react";

type Block = {
    id?: string;
    type: string;
    data: any;
};

type Props = {
    blocks?: Block[];
};


function RichText({ data }: { data: any }) {

    return (
        <section className="px-5 py-12">
            <div className="mx-auto max-w-5xl">

                {data.title && (
                    <h2 className="mb-5 text-3xl font-bold text-[#101f55]">
                        {data.title}
                    </h2>
                )}

                <div
                    className="prose prose-lg max-w-none text-slate-600"
                    dangerouslySetInnerHTML={{
                        __html: data.html || "",
                    }}
                />

            </div>
        </section>
    );
}


function ImageBlock({ data }: { data: any }) {

    return (
        <section className="px-5 py-12">
            <div className="mx-auto max-w-6xl">

                <img
                    src={data.src}
                    alt={data.alt || ""}
                    className="w-full rounded-3xl object-cover shadow-sm"
                />

                {data.caption && (
                    <p className="mt-3 text-center text-sm text-slate-500">
                        {data.caption}
                    </p>
                )}

            </div>
        </section>
    );
}


function VideoBlock({ data }: { data: any }) {

    return (
        <section className="px-5 py-12">
            <div className="mx-auto max-w-5xl">

                <div className="aspect-video overflow-hidden rounded-3xl bg-black">

                    <iframe
                        src={data.url}
                        title={data.title || "Service Video"}
                        className="h-full w-full"
                        allowFullScreen
                    />

                </div>

            </div>
        </section>
    );
}


function FeaturesBlock({ data }: { data: any }) {

    return (
        <section className="bg-[#f5f6f9] px-5 py-16">

            <div className="mx-auto max-w-6xl">

                {data.title && (
                    <h2 className="text-center text-3xl font-bold text-[#101f55]">
                        {data.title}
                    </h2>
                )}

                {data.subtitle && (
                    <p className="mx-auto mt-4 max-w-2xl text-center text-slate-500">
                        {data.subtitle}
                    </p>
                )}

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {(data.items || []).map(
                        (item: any, index: number) => (

                            <div
                                key={index}
                                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100"
                            >

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff7dc] text-[#101f55] font-bold">
                                    {index + 1}
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-[#101f55]">
                                    {item.title}
                                </h3>

                                <p className="mt-3 leading-7 text-slate-500">
                                    {item.description}
                                </p>

                            </div>

                        )
                    )}

                </div>

            </div>

        </section>
    );
}


function StatsBlock({ data }: { data: any }) {

    return (
        <section className="bg-[#101f55] px-5 py-16">

            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">

                {(data.items || []).map(
                    (item: any, index: number) => (

                        <div
                            key={index}
                            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
                        >

                            <div className="text-4xl font-bold text-white">
                                {item.number}
                            </div>

                            <div className="mt-2 text-white/60">
                                {item.label}
                            </div>

                        </div>

                    )
                )}

            </div>

        </section>
    );
}


function FAQBlock({ data }: { data: any }) {

    return (
        <section className="px-5 py-16">

            <div className="mx-auto max-w-4xl">

                {data.title && (
                    <h2 className="text-center text-3xl font-bold text-[#101f55]">
                        {data.title}
                    </h2>
                )}

                <div className="mt-10 space-y-4">

                    {(data.items || []).map(
                        (item: any, index: number) => (

                            <details
                                key={index}
                                className="group rounded-2xl border border-slate-200 bg-white p-6"
                            >

                                <summary className="cursor-pointer list-none font-bold text-[#101f55]">
                                    {item.question}
                                </summary>

                                <p className="mt-4 leading-7 text-slate-500">
                                    {item.answer}
                                </p>

                            </details>

                        )
                    )}

                </div>

            </div>

        </section>
    );
}


function TestimonialsBlock({ data }: { data: any }) {

    return (
        <section className="bg-[#f5f6f9] px-5 py-16">

            <div className="mx-auto max-w-6xl">

                <h2 className="text-center text-3xl font-bold text-[#101f55]">
                    {data.title || "What Our Clients Say"}
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {(data.items || []).map(
                        (item: any, index: number) => (

                            <div
                                key={index}
                                className="rounded-3xl bg-white p-7 shadow-sm"
                            >

                                <p className="leading-7 text-slate-600">
                                    "{item.message}"
                                </p>

                                <div className="mt-6">

                                    <div className="font-bold text-[#101f55]">
                                        {item.name}
                                    </div>

                                    {item.designation && (
                                        <div className="text-sm text-slate-400">
                                            {item.designation}
                                        </div>
                                    )}

                                </div>

                            </div>

                        )
                    )}

                </div>

            </div>

        </section>
    );
}


function CTA({ data }: { data: any }) {

    return (
        <section className="px-5 py-16">

            <div className="mx-auto max-w-6xl rounded-3xl bg-[#101f55] px-8 py-14 text-center">

                <h2 className="text-3xl font-bold text-white">
                    {data.title}
                </h2>

                {data.description && (
                    <p className="mx-auto mt-4 max-w-2xl text-white/70">
                        {data.description}
                    </p>
                )}

                {data.button_url && (
                    <a
                        href={data.button_url}
                        className="mt-7 inline-flex rounded-xl bg-[#1261c9] px-7 py-3 font-bold text-white"
                    >
                        {data.button_text || "Let's Talk"}
                    </a>
                )}

            </div>

        </section>
    );
}


function CustomHTML({ data }: { data: any }) {

    return (
        <section
            className="service-custom-html"
            dangerouslySetInnerHTML={{
                __html: data.html || "",
            }}
        />
    );
}


export default function ServiceBlockRenderer({
    blocks = [],
}: Props) {

    return (
        <>

            {blocks.map((block, index) => {

                const key = block.id || `block-${index}`;

                switch (block.type) {

                    case "rich_text":
                        return (
                            <RichText
                                key={key}
                                data={block.data}
                            />
                        );

                    case "image":
                        return (
                            <ImageBlock
                                key={key}
                                data={block.data}
                            />
                        );

                    case "video":
                        return (
                            <VideoBlock
                                key={key}
                                data={block.data}
                            />
                        );

                    case "features":
                        return (
                            <FeaturesBlock
                                key={key}
                                data={block.data}
                            />
                        );

                    case "stats":
                        return (
                            <StatsBlock
                                key={key}
                                data={block.data}
                            />
                        );

                    case "faq":
                        return (
                            <FAQBlock
                                key={key}
                                data={block.data}
                            />
                        );

                    case "testimonials":
                        return (
                            <TestimonialsBlock
                                key={key}
                                data={block.data}
                            />
                        );

                    case "cta":
                        return (
                            <CTA
                                key={key}
                                data={block.data}
                            />
                        );

                    case "custom_html":
                        return (
                            <CustomHTML
                                key={key}
                                data={block.data}
                            />
                        );

                    default:
                        return null;
                }

            })}

        </>
    );
}