import { DeepCartClient } from './client';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('DeepCartClient', () => {
  const config = {
    baseUrl: 'https://api.deepcart.example.com',
    apiKey: 'test-api-key-123',
  };

  let client: DeepCartClient;
  const mockGet = jest.fn();
  const mockPost = jest.fn();
  const mockPut = jest.fn();
  const mockDelete = jest.fn();

  beforeEach(() => {
    const mockAxiosInstance = {
      get: mockGet,
      post: mockPost,
      put: mockPut,
      delete: mockDelete,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

    mockedAxios.create.mockReturnValue(mockAxiosInstance);
    client = new DeepCartClient(config);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should create an axios instance with correct config', () => {
      expect(mockedAxios.create).toHaveBeenCalledWith({
        baseURL: config.baseUrl,
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': config.apiKey,
        },
      });
    });
  });

  describe('ping', () => {
    it('should make a GET request to /ping endpoint', async () => {
      const mockResponse = {
        data: {
          status: 'ok',
          timestamp: 1234567890,
        },
      };

      mockGet.mockResolvedValue(mockResponse);

      const result = await client.ping();

      expect(mockGet).toHaveBeenCalledWith('/ping');
      expect(result).toEqual(mockResponse.data);
    });

    it('should handle errors correctly', async () => {
      const mockError = {
        message: 'Network Error',
        response: {
          status: 500,
        },
        isAxiosError: true,
      };

      mockGet.mockRejectedValue(mockError);
      mockedAxios.isAxiosError.mockReturnValue(true);

      await expect(client.ping()).rejects.toEqual({
        message: 'Network Error',
        status: 500,
      });
    });
  });
});

