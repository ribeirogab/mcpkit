import { McpServer, type McpTool } from 'simple-mcp';
import { z } from 'zod';

// Initialize a new MCP server with the name 'greet-server'
const server = new McpServer({ name: 'greet-server' });

// Define a new tool named 'greet'
const tool: McpTool = {
  name: 'greet',

  // Specify the expected input parameters for the tool
  parameters: {
    name: z.string(), // Expects a string input named 'name'
  },

  // Define the logic to be executed when the tool is called
  execute: async ({ name }) => {
    return {
      content: [
        {
          type: 'text',
          text: `Hello, ${name}! Nice to meet you.`, // Returns a personalized greeting
        },
      ],
    };
  },
};

// Register the tool with the server
server.tool(tool);

// Start the server using stdio as the transport method
server.start({ transportType: 'stdio' });
