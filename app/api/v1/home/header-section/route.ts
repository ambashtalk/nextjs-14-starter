import { CMSHeaderSectionResponse } from "@/app/_common/clients/response/home-page-response";
import CMSClient from "@common/clients/cms-client";
import { HOME_PAGE } from "@common/constants";

export async function GET() {
    const data =
        await CMSClient.getInstance().getEntry<CMSHeaderSectionResponse>(
            HOME_PAGE.ID,
            [HOME_PAGE.HEADER_SECTION.ID],
        );

    const transformedData = {
        ...data,
    };

    return Response.json(transformedData);
}
