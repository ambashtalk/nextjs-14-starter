import BaseClient from "./base-client";
import { InternalAxiosRequestConfig } from "axios";

class HttpClient extends BaseClient {
    private static instance: HttpClient;

    // Private constructor to prevent direct instantiation
    private constructor(baseURL: string) {
        // Initialize your service here
        super(baseURL);

        this.axiosInstance.interceptors.request.use(
            (axiosConfig: InternalAxiosRequestConfig) => {
               
                return axiosConfig;
            },
            (error: any) => {
                return Promise.reject(error);
            },
        );
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new HttpClient("");
        }

        return HttpClient.instance;
    }
}

export default HttpClient;
