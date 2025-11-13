import axios, { AxiosInstance, AxiosError } from 'axios';
import { DeepCartConfig, PingResponse, ApiError } from './types';

/**
 * DeepCart SDK Client
 * 
 * A TypeScript SDK for interacting with the DeepCart API
 */
export class DeepCartClient {
  private client: AxiosInstance;
  private apiKey: string;

  /**
   * Creates a new DeepCart SDK client
   * 
   * @param config - Configuration options including baseUrl and apiKey
   */
  constructor(config: DeepCartConfig) {
    this.apiKey = config.apiKey;
    
    this.client = axios.create({
      baseURL: config.baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey,
      },
    });
  }

  /**
   * Ping the API to check if it's available
   * 
   * @returns Promise with the ping response
   * @throws ApiError if the request fails
   */
  async ping(): Promise<PingResponse> {
    try {
      const response = await this.client.get<PingResponse>('/ping');
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Handle API errors and convert them to a consistent format
   * 
   * @param error - The error from axios
   * @returns Formatted API error
   */
  private handleError(error: unknown): ApiError {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return {
        message: axiosError.message,
        status: axiosError.response?.status,
      };
    }
    return {
      message: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
}
