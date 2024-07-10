import { CMSHeroSectionResponse } from "@common/clients/response/home-page-response";
import { BasePageResponse } from "@common/models/types/base-page-response";
import { HeroSectionModel } from "@common/models/types/home-page-model";
import CMSClient from "@common/clients/cms-client";
import { HOME_PAGE } from "@common/constants";

export async function GET() {
    const response: BasePageResponse<CMSHeroSectionResponse> =
        await CMSClient.getInstance().getEntry<CMSHeroSectionResponse>(
            HOME_PAGE.ID,
            [HOME_PAGE.HERO_IMAGE.ID, HOME_PAGE.HERO_TITLE.ID],
        );

    const transformedData: BasePageResponse<HeroSectionModel> = {
        ...response,
        data: {
            ...response.data,
            heroSection: {
                heroImage: response.data.heroImage,
                heroTitle: response.data.heroTitle,
            },
        },
    };

    return Response.json(transformedData);
}
