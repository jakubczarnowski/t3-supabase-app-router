import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "drizzle/schema";

export { schema };

export * from "drizzle-orm";

export const db = drizzle(sql, { schema });
