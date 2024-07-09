import CMSClient from "@common/clients/cms-client";
import { HOME_PAGE } from "@common/constants";

export async function GET() {
    const data = await CMSClient.getInstance().getEntry(HOME_PAGE.ID, [
        HOME_PAGE.HEADER_SECTION.ID,
    ]);

    return Response.json(data);
}
