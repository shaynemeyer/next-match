import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { prisma } from "./lib/prisma";

export const { handlers, auth } = NextAuth({
  adapter: PrismaAdapter(pris ma),
  session: { strategy: "jwt" },
  ...authConfig,
});
