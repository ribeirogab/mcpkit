# MCPKit Examples

This directory contains example implementations using MCPKit to create MCP (Model Context Protocol) servers.

## Available Examples

### Greeting Tool (`greet.ts`)

A simple example that demonstrates how to create an MCP server with a greeting tool. This tool takes a name as input and returns a personalized greeting message.

### Calculator Tool (`calculator.ts`)

A more advanced example that implements a calculator tool capable of performing basic mathematical operations (addition, subtraction, multiplication, and division).

## Testing Your MCP Server

After starting your MCP server, you can test it using various MCP clients:

### Using Claude

If you're using Claude, you can configure it to use your MCP server by adding the following to your Claude configuration:

```json
{
  "mcpServers": {
    "my-mcp-server": {
      "command": "node",
      "args": [
        "${YOUR_FULL_PATH}/dist/examples/greet.js"
      ]
    }
  }
}
```

### Using MCP CLI

You can also test your MCP server using the [MCP CLI](https://github.com/wong2/mcp-cli):

```bash
npm install -g mcp-cli
mcp-cli
```

### Using MCP Inspector

The [MCP Inspector](https://modelcontextprotocol.io/docs/tools/inspector) provides a web interface for testing MCP servers:

```bash
npm install -g @modelcontextprotocol/inspector
mcp-inspector
```

## Creating Your Own Examples

Feel free to create your own examples based on these templates. The basic structure for an MCP server using MCPKit is:

```typescript
import { McpServer } from 'mcpkit';
import { z } from 'zod';

// Create a server instance
const server = new McpServer({ name: 'my-server' });

// Add a tool
server.tool({
  name: 'my-tool',
  parameters: {
    // Define parameters with Zod
    param1: z.string().describe('Description of param1')
  },
  execute: async ({ param1 }) => {
    // Implement tool logic
    return {
      content: [
        {
          type: 'text',
          text: `Result: ${param1}`
        }
      ]
    };
  }
});

// Start the server
server.start({ transportType: 'stdio' });
```
