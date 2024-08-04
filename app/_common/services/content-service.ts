import HttpClient from "@common/clients/http-client";
import { BasePageResponse } from "@common/models/base-page-response";
import { HeaderSectionModel, HeroSectionModel, HomePageModelType } from "@common/models/home-page-model";

export default class ContentService {
    private static instance: ContentService;
    private httpClient: HttpClient;

    // Private constructor to prevent direct instantiation
    private constructor() {
        // Initialize your service here
        this.httpClient = HttpClient.getInstance()
    }

    // Static method to get the single instance of the class
    public static getInstance(): ContentService {
        if (!ContentService.instance) {
            ContentService.instance = new ContentService();
        }
        return ContentService.instance;
    }

    public getHeaderSection(): Promise<BasePageResponse<HeaderSectionModel>> {
        return this.httpClient.get("/api/v1/home/header-section")
    }

    public getHeroSection(): Promise<BasePageResponse<HeroSectionModel>> {
        return this.httpClient.get("/api/v1/home/hero-section")
    }
}
