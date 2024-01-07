import {
  pgTable,
  unique,
  pgEnum,
  uuid,
  timestamp,
  text,
} from "drizzle-orm/pg-core";

export const keyStatus = pgEnum("key_status", [
  "expired",
  "invalid",
  "valid",
  "default",
]);
export const keyType = pgEnum("key_type", [
  "stream_xchacha20",
  "secretstream",
  "secretbox",
  "kdf",
  "generichash",
  "shorthash",
  "auth",
  "hmacsha256",
  "hmacsha512",
  "aead-det",
  "aead-ietf",
]);
export const requestStatus = pgEnum("request_status", [
  "ERROR",
  "SUCCESS",
  "PENDING",
]);
export const factorType = pgEnum("factor_type", ["webauthn", "totp"]);
export const factorStatus = pgEnum("factor_status", ["verified", "unverified"]);
export const aalLevel = pgEnum("aal_level", ["aal3", "aal2", "aal1"]);
export const codeChallengeMethod = pgEnum("code_challenge_method", [
  "plain",
  "s256",
]);

export const profiles = pgTable(
  "profiles",
  {
    id: uuid("id")
      .primaryKey()
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
    email: text("email"),
    fullName: text("full_name"),
    avatarUrl: text("avatar_url"),
  },
  (table) => {
    return {
      profilesEmailKey: unique("profiles_email_key").on(table.email),
    };
  },
);
import { users } from "~/server/db/authSchema";
