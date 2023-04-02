import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const middleware = t.middleware;
export const router = t.router;
export const mergeRouters = t.mergeRouters;

const loggingMiddleware = middleware(async ({ path, type, next }) => {
    const start = Date.now();
    const result = await next();
    const durationMs = Date.now() - start;
    result.ok
        ? console.log("OK request timing:", { path, type, durationMs })
        : console.log("Non-OK request timing", { path, type, durationMs });
    return result;
});

export const baseProcedure = t.procedure.use(loggingMiddleware);
