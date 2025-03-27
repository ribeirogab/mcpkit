# Simple MCP

A simple TypeScript library for creating [MCP](https://modelcontextprotocol.io/) (Model Context Protocol) servers.

## Features

- **Simple API**: Create MCP servers with minimal code
- **Type Safety**: Full TypeScript integration
- **Parameter Validation**: Built-in validation with Zod
- **MCP Compatible**: Fully implements the Model Context Protocol

## Installation

```bash
npm install simple-mcp
```

## Quickstart

```typescript
import { McpServer } from 'simple-mcp';
import { z } from 'zod';

// Create a server instance
const server = new McpServer({ name: 'my-server' });

// Add a tool
server.tool({
  name: 'greet',
  parameters: {
    name: z.string().describe('Person\'s name')
  },
  execute: async ({ name }) => {
    return {
      content: [
        {
          type: 'text',
          text: `Hello, ${name}!`
        }
      ]
    };
  }
});

// Start the server
server.start({ transportType: 'stdio' });
```

## Examples

Check out the [examples directory](https://github.com/ribeirogab/simple-mcp/tree/main/examples) for more complete examples:

- [Greeting Tool](https://github.com/ribeirogab/simple-mcp/tree/main/examples/greet.ts) - Simple greeting example
- [Calculator Tool](https://github.com/ribeirogab/simple-mcp/tree/main/examples/calculator.ts) - Mathematical operations example

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

[MIT](LICENSE)
