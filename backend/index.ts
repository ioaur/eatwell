import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";
import { router } from "./router/config";
import greetingsRouter from "./router/greetings";

const appRouter = router({
    greetings: greetingsRouter,
});

const httpServer = createHTTPServer({
    middleware: cors(),
    router: appRouter,
}).listen(5000);

console.log(`Server running on port ${httpServer.port}`);

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;
export default appRouter;
