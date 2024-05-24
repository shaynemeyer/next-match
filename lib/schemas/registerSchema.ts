import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "Name should be specified"),
  email: z.string().email(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(30),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
