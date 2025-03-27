import { z } from 'zod';

import { McpServer, type McpTool } from '../dist';

// Initialize a new MCP server with the name 'calculator-server'
const server = new McpServer({ name: 'calculator-server', version: '1.0.0' });

// Define a new tool named 'calculator'
const tool: McpTool = {
  name: 'calculator',

  // Specify the expected input parameters for the tool
  parameters: {
    operation: z
      .enum(['add', 'subtract', 'multiply', 'divide'])
      .describe('Mathematical operation to perform'),
    a: z.number().describe('First number'),
    b: z.number().describe('Second number'),
  },

  // Define the logic to be executed when the tool is called
  execute: async ({ operation, a, b }) => {
    let result = 0; // Initialize with default value
    let symbol = ''; // Initialize with default value

    // Perform the requested operation
    switch (operation) {
      case 'add':
        result = a + b;
        symbol = '+';
        break;
      case 'subtract':
        result = a - b;
        symbol = '-';
        break;
      case 'multiply':
        result = a * b;
        symbol = '*';
        break;
      case 'divide':
        if (b === 0) {
          throw new Error('Division by zero is not allowed');
        }
        result = a / b;
        symbol = '/';
        break;
    }

    // Return the result
    return {
      content: [
        {
          type: 'text',
          text: `${a} ${symbol} ${b} = ${result}`,
        },
      ],
    };
  },
};

// Register the tool with the server
server.tool(tool);

// Start the server using stdio as the transport method
server.start({ transportType: 'stdio' });
