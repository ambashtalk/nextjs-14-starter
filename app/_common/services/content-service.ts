import CMSClient from "../clients/cms-client";

export class ContentService {
  private static instance: ContentService;
  private cmsClient: CMSClient;

  // Private constructor to prevent direct instantiation
  private constructor() {
    // Initialize your service here
    this.cmsClient = CMSClient.getInstance();
  }

  // Static method to get the single instance of the class
  public static getInstance(): ContentService {
    if (!ContentService.instance) {
      ContentService.instance = new ContentService();
    }
    return ContentService.instance;
  }

  public getHeaderSection() {
    return this.cmsClient.getEntry(HOME_PAGE.ID, [HOME_PAGE.HEADER_SECTION.ID]);
  }
}
