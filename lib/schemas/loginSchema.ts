import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(30),
});

export type LoginSchema = z.infer<typeof loginSchema>;
