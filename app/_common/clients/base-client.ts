import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

abstract class BaseClient {
  protected axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Optional: Setup interceptors for request and response
    this.axiosInstance.interceptors.request.use(
      (axiosConfig: InternalAxiosRequestConfig) => {
        // Add authorization token or other request modifications here
        // config.headers.Authorization = `Bearer ${token}`;
        return axiosConfig;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        // Handle successful response
        return response;
      },
      (error) => {
        // Handle error response
        return Promise.reject(error);
      }
    );
  }

  // Example GET method
  protected async get<T>(url: string, params?: Record<string, unknown>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(url, { params });
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Example POST method
  protected async post<T>(url: string, data: unknown): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Example PUT method
  protected async put<T>(url: string, data: unknown): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.put(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Example DELETE method
  protected async delete<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.delete(url);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Optional: handle errors
  private handleError(error: any): void {
    // Implement your error handling logic here
    console.error('API call error:', error);
  }
}

export default BaseClient;
