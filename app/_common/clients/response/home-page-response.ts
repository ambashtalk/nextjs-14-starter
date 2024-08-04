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

export type CMSCommonData = {
    title: string;
    locale: string;
};

export type CMSHeaderSectionResponse = {
    headerSection: HeaderType;
} & CMSCommonData;

export type CMSHeroSectionResponse = {
    heroImage: ImageType;
    heroTitle: TextType;
} & CMSCommonData;

export type CMSLeadFormSectionResponse = {
    leadForm: {
        header: CMSTextType;
        name: InputType;
        phone: InputType;
        email: InputType;
        submit: InputType;
    };
} & CMSCommonData;

export type CMSHighlightSectionResponse = {
    highlights: {
        icon: CMSImageType;
        text: TextType;
    }[];
} & CMSCommonData;

export type CMSGallerySectionResponse = {
    gallerySection: GalleryType;
} & CMSCommonData;

export type CMSGalleryBannerResponse = {
    galleryBanner: BannerType;
} & CMSCommonData;

export type CMSFaqSectionResponse = {
    faqSection: FaqType;
} & CMSCommonData;

export type CMSFaqBannerResponse = {
    faqBanner: BannerType;
} & CMSCommonData;

export type CMSFooterSectionResponse = {
    footerSection: FooterType;
} & CMSCommonData;

export type CMSHomePageResponseType = CMSCommonData &
    CMSHeaderSectionResponse &
    CMSHeroSectionResponse &
    CMSLeadFormSectionResponse &
    CMSHighlightSectionResponse &
    CMSGallerySectionResponse &
    CMSGalleryBannerResponse &
    CMSFaqSectionResponse &
    CMSFaqBannerResponse &
    CMSFooterSectionResponse;
