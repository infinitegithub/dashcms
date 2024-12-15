import { z } from 'zod';

export const WordPressConfigSchema = z.object({
  siteUrl: z.string().url(),
  apiKey: z.string().min(1),
  username: z.string().min(1),
  password: z.string().min(1),
  customEndpoints: z.array(z.object({
    name: z.string(),
    endpoint: z.string(),
    method: z.enum(['GET', 'POST', 'PUT', 'DELETE'])
  })).optional()
});

export const DatabaseConfigSchema = z.object({
  type: z.enum(['mysql', 'postgresql', 'mongodb']),
  host: z.string(),
  port: z.number(),
  database: z.string(),
  username: z.string(),
  password: z.string(),
  ssl: z.boolean().optional(),
  mediaStorage: z.object({
    provider: z.enum(['s3', 'cloudinary', 'local']),
    config: z.record(z.string(), z.string())
  }).optional()
});

export type WordPressConfig = z.infer<typeof WordPressConfigSchema>;
export type DatabaseConfig = z.infer<typeof DatabaseConfigSchema>;

export interface IntegrationSettings {
  wordpress?: WordPressConfig;
  database?: DatabaseConfig;
  mediaStorage?: {
    provider: 's3' | 'cloudinary' | 'local';
    config: Record<string, string>;
  };
}