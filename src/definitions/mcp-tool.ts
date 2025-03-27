import { z, ZodObject, type ZodRawShape } from 'zod';

export type McpToolExecute<Args extends ZodRawShape> = (
  request: z.infer<ZodObject<Args>>,
) => Promise<{ content: { type: string; text: string }[] }>;

export type McpTool<Args extends ZodRawShape = ZodRawShape> = {
  execute: McpToolExecute<Args>;
  parameters: Args;
  name: string;
};
