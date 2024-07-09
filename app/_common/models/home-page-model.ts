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

export type HeaderSectionModel = HeaderType

export type HeroSectionModel = {
    heroImage: ImageType;
    heroTitle: TextType;
};

export type LeadFormSectionModel = {
    header: CMSTextType;
    name: InputType;
    phone: InputType;
    email: InputType;
    submit: InputType;
};

export type HighlightSectionModel = {
    icon: CMSImageType;
    text: TextType;
}[];

export type GallerySectionModel = GalleryType

export type GalleryBannerModel = BannerType

export type FaqSectionModel = FaqType

export type FaqBannerModel = BannerType

export type FooterSectionModel = FooterType


export type HomePageModelType = {
    title: string;
    locale: string
    headerSection: HeaderSectionModel;
    heroSection: HeroSectionModel;
    leadForm: LeadFormSectionModel;
    highlights: HighlightSectionModel;
    gallerySection: GallerySectionModel;
    galleryBanner: GalleryBannerModel;
    faqSection: FaqSectionModel;
    faqBanner: FaqBannerModel;
    footerSection: FooterSectionModel;
};
