import ContentService from "../services/content-service"
import {HomePageModelType} from "./types/home-page-model-type"

class HomePageModel {
    private homePage: HomePageModelType| null
    private contentService: ContentService

    constructor() {
        this.contentService = ContentService.getInstance()
        this.homePage = null
    }

    getHomePage() {
        const cmsResponse = this.contentService.getHeaderSection()
    }
}