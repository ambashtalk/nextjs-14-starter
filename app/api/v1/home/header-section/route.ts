import { CMSHeaderSectionResponse } from "@common/clients/response/home-page-response";
import { BasePageResponse } from "@common/models/types/base-page-response-type";
import { HeaderSectionModel } from "@common/models/types/home-page-model-type";
import CMSClient from "@common/clients/cms-client";
import { HOME_PAGE } from "@common/constants";


export async function GET() {
    const response: BasePageResponse<CMSHeaderSectionResponse> =
        await CMSClient.getInstance().getEntry<CMSHeaderSectionResponse>(
            HOME_PAGE.ID,
            [HOME_PAGE.HEADER_SECTION.ID],
        );

    const transformedData: BasePageResponse<HeaderSectionModel> = {
        ...response,
    };

    return Response.json(transformedData);
}
