import { McpServer, type McpTool } from 'simple-mcp';
import { z } from 'zod';

const parameters = z.object({
  name: z.string().describe('The name is required'),
});

/**
 * GreetTool class implements the McpTool interface
 * This demonstrates how to create an MCP tool using a class-based approach
 */
class GreetTool implements McpTool<typeof parameters.shape> {
  // Tool name
  public readonly name = 'greet';

  // Define parameters with Zod schema
  public readonly parameters = parameters.shape;

  /**
   * Execute method that will be called when the tool is invoked
   * @param request The validated request parameters
   */
  public async execute({ name }: z.infer<typeof parameters>) {
    return {
      content: [
        {
          type: 'text',
          text: `Hello, ${name}! Nice to meet you.`,
        },
      ],
    };
  }
}

// Initialize a new MCP server with the name 'greet-server'
const server = new McpServer({ name: 'greet-server' });

// Create an instance of the GreetTool class
const greetTool = new GreetTool();

// Register the tool with the server
server.tool(greetTool);

// Start the server using stdio as the transport method
server.start({ transportType: 'stdio' });
