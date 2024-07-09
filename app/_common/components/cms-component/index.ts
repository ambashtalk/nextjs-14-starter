// CMS Primitive Types
export type CMSTextType = string;

export type CMSBooleanType = boolean;

export type CMSImageType = {
    url: string;
    alternativeText?: string;
    caption?: string;
};

// CMS Common Components
export type CTAVariantType = "primary" | "secondary";
export type CTAType = {
    link: LinkType;
    variant: CTAVariantType;
};

export type ErrorType = {
    minLength: CMSTextType;
    maxLength: CMSTextType;
    invalid: CMSTextType;
    empty: CMSTextType;
};

export type FaqItemType = {
    question: CMSTextType;
    answer: CMSTextType;
};

export type HighlightType = {
    icon: CMSImageType;
    text: CMSTextType;
};

export type ImageType = {
    source?: CMSImageType;
    background?: CMSTextType;
};

export type HTMLInputType =
    | "text"
    | "number"
    | "email"
    | "password"
    | "checkbox"
    | "radio"
    | "file"
    | "date"
    | "button"
    | "submit";

export type InputType = {
    label: CMSTextType;
    placeholder: CMSTextType;
    type: HTMLInputType;
    errors: ErrorType;
    required: CMSBooleanType;
};

export type LinkType = {
    text: CMSTextType;
    url: CMSTextType;
    isExternal: CMSBooleanType;
    icon: CMSImageType;
};

export type SlideType = {
    image: CMSImageType;
    text: TextType;
    topTitle: CMSTextType;
};

export type TextType = {
    header?: CMSTextType;
    content: CMSTextType;
};

// CMS Section Components
export type BannerType = {
    backgroundImage: CMSImageType;
    backgroundCSS: CMSTextType;
    text: TextType;
    cta: CTAType;
};

export type FaqType = {
    header: CMSTextType;
    faqs: FaqItemType[];
};

export type FooterType = {
    address: TextType;
    contact: TextType;
    socialLinks: LinkType[];
};

export type GalleryType = {
    slides: SlideType[];
};

export type HeaderType = {
    companyName: CMSTextType;
    companyLogo: CMSImageType;
    navItems: LinkType[];
    hamburgerIcon: CMSImageType;
};
