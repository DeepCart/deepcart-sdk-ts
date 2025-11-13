# @deepcart/client

[![npm version](https://img.shields.io/npm/v/@deepcart/client.svg)](https://www.npmjs.com/package/@deepcart/client)
[![npm downloads](https://img.shields.io/npm/dm/@deepcart/client.svg)](https://www.npmjs.com/package/@deepcart/client)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/DeepCart/deepcart-sdk-ts/workflows/CI/badge.svg)](https://github.com/DeepCart/deepcart-sdk-ts/actions)

TypeScript client for DeepCart API - framework-agnostic API wrapper for interacting with the DeepCart platform.

For React components, see [@deepcart/react](https://github.com/DeepCart/deepcart-react) (coming soon).

## Installation

```bash
npm install @deepcart/client
```

## Usage

```typescript
import { DeepCartClient } from '@deepcart/client';

// Initialize the client with your API credentials
const client = new DeepCartClient({
  baseUrl: 'https://api.deepcart.com',
  apiKey: 'your-api-key-here'
});

// Ping the API to check connectivity
async function checkConnection() {
  try {
    const response = await client.ping();
    console.log('API Status:', response.status);
    console.log('Timestamp:', response.timestamp);
  } catch (error) {
    console.error('Error:', error);
  }
}

checkConnection();
```

## API Reference

### `DeepCartClient`

Main client class for interacting with the DeepCart API.

#### Constructor

```typescript
new DeepCartClient(config: DeepCartConfig)
```

**Parameters:**
- `config.baseUrl` (string): The base URL of the DeepCart API
- `config.apiKey` (string): Your API key for authentication

#### Methods

##### `ping(): Promise<PingResponse>`

Pings the API to verify connectivity and authentication.

**Returns:**
- `Promise<PingResponse>`: Object containing status and timestamp

**Example:**
```typescript
const response = await client.ping();
// { status: 'ok', timestamp: 1234567890 }
```

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and contribute to the project.

## License

MIT
