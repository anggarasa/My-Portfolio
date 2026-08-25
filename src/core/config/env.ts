import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    SKIP_ENV_VALIDATION: z
      .string()
      .transform((val) => val === "true")
      .optional(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    SKIP_ENV_VALIDATION: process.env.SKIP_ENV_VALIDATION,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
