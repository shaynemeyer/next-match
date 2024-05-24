import { ZodIssue } from "zod";

type ActionResult<T> =
  | { success: "success"; data: T }
  | { status: "error"; error: string | ZodIssue[] };
