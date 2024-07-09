"use server";

import BaseClient from "./base-client";
import { InternalAxiosRequestConfig } from "axios";
import { convertSectionIdsToQueryParam } from "@common/utils";
import { BasePageResponse } from "@common/models/base-page-response";
import { HomePageModelType } from "@common/models/home-page-model";

class CMSClient extends BaseClient {
    private static instance: CMSClient;

    // Private constructor to prevent direct instantiation
    private constructor(baseURL: string) {
        // Initialize your service here
        super(baseURL);

        this.axiosInstance.interceptors.request.use(
            (axiosConfig: InternalAxiosRequestConfig) => {
                axiosConfig.headers.setAuthorization(
                    `Bearer ${process.env.CMS_API_TOKEN ?? ""}`,
                );
                return axiosConfig;
            },
            (error: any) => {
                return Promise.reject(error);
            },
        );
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new CMSClient(process.env.CMS_BASE_URL ?? "");
        }

        return CMSClient.instance;
    }

    public getEntry(pageId: string, sectionIds: string[]) {
        return this.get<BasePageResponse<HomePageModelType>>(
            `api/${pageId}`,
            convertSectionIdsToQueryParam(sectionIds),
        );
    }
}

export default CMSClient;
