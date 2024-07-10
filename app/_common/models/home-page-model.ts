import {
    BannerType,
    CMSImageType,
    CMSTextType,
    FaqType,
    FooterType,
    GalleryType,
    HeaderType,
    ImageType,
    InputType,
    TextType,
} from "@common/components/cms-component";

export type CommonData = {
    title: string;
    locale: string;
};

export type HeaderSectionModel = CommonData & {
    headerSection: HeaderType;
};

export type HeroSectionModel = CommonData & {
    heroSection: {
        heroImage: ImageType;
        heroTitle: TextType;
    };
};

export type LeadFormSectionModel = CommonData & {
    leadForm: {
        header: CMSTextType;
        name: InputType;
        phone: InputType;
        email: InputType;
        submit: InputType;
    };
};

export type HighlightSectionModel = CommonData & {
    highlights: {
        icon: CMSImageType;
        text: TextType;
    }[];
};

export type GallerySectionModel = {
    gallerySection: GalleryType;
};

export type GalleryBannerModel = {
    galleryBanner: BannerType;
};

export type FaqSectionModel = {
    faqSection: FaqType;
};

export type FaqBannerModel = {
    faqBanner: BannerType;
};

export type FooterSectionModel = {
    footerSection: FooterType;
};

export type HomePageModelType = CommonData &
    HeaderSectionModel &
    HeroSectionModel &
    LeadFormSectionModel &
    HighlightSectionModel &
    GallerySectionModel &
    GalleryBannerModel &
    FaqSectionModel &
    FaqBannerModel &
    FooterSectionModel;
