export interface Offering {
    title: string;
    description?: string;
    icon?: string;
}

export interface Tool {
    name: string;
    description?: string;
    icon?: string;
}

export interface ProcessStep {
    title: string;
    description?: string;
}

export interface Faq {
    question: string;
    answer?: string;
}

export interface ServiceImageType {
    id: number;
    image_path: string;
    alt_text?: string | null;
    tag?: string | null;
    is_visible: boolean;
    sort_order: number;
}

export interface Service {
    id: number;
    category?: string | null;
    title: string;
    slug: string;
    short_description?: string | null;
    content?: string | null;

    breadcrumb_label?: string | null;
    hero_heading?: string | null;
    hero_subheading?: string | null;
    hero_image?: string | null;
    hero_image_alt?: string | null;

    offerings?: Offering[];
    tools?: Tool[];
    process_steps?: ProcessStep[];
    faqs?: Faq[];
    tags?: string[];

    cta_heading?: string | null;
    cta_button_text?: string | null;

    meta_title?: string | null;
    meta_description?: string | null;
    meta_keywords?: string | null;

    sort_order?: number;
    is_active: boolean;

    images?: ServiceImageType[];
}
