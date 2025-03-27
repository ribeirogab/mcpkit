import { z } from 'zod';

export const MCP_TRANSPORT_TYPE_SCHEMA = z.literal('stdio');

export type McpTransportType = z.infer<typeof MCP_TRANSPORT_TYPE_SCHEMA>;
