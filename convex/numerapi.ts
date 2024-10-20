import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createdb = mutation({
  args: {
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx,args) => {

    await ctx.db.insert("Numerapi",{
        name:args.name,
        email:args.email,
    });

  },
});
