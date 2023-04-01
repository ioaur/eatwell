import { initTRPC } from "@trpc/server";
import greetingsRouter from "./greetings";

const t = initTRPC.create();

export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;

const appRouter = router({
    greetings: greetingsRouter,
});

export default appRouter;
