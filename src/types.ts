/**
 * Configuration options for the DeepCart SDK
 */
export interface DeepCartConfig {
  /**
   * Base URL for the DeepCart API
   */
  baseUrl: string;

  /**
   * API key for authentication
   */
  apiKey: string;
}

/**
 * Response from the ping endpoint
 */
export interface PingResponse {
  status: string;
  timestamp: number;
}

/**
 * Generic API error response
 */
export interface ApiError {
  message: string;
  status?: number;
}
