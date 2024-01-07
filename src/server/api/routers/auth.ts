import { eq } from "drizzle-orm";
import { profiles } from "drizzle/schema";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const authRouter = createTRPCRouter({
  getProfile: privateProcedure.query(({ ctx }) => {
    return ctx.db.query.profiles.findFirst({
      where: eq(profiles.id, ctx.user.id),
    });
  }),
});
