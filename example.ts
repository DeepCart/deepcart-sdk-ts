import { DeepCartClient } from './src';

// Example usage of the DeepCart SDK

async function main() {
  // Initialize the client
  const client = new DeepCartClient({
    baseUrl: 'https://api.deepcart.com',
    apiKey: 'your-api-key-here'
  });

  try {
    // Ping the API
    const response = await client.ping();
    console.log('Ping successful!');
    console.log('Status:', response.status);
    console.log('Timestamp:', response.timestamp);
  } catch (error) {
    console.error('Error calling API:', error);
  }
}

// Run the example
main();
