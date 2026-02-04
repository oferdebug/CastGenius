/**
 * Projects queries & mutations. See docs/AIRTIME_ROADMAP.md Phase 1.2.
 */

import { v } from "convex/values";
import { query } from "./_generated/server";

export const getProjectById = query({
  args: { id: v.id("projects") },
  handler: async (ctx, { id }) => {
    return await ctx.db.get(id);
  },
});
