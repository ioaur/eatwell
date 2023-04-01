import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";
import appRouter from "./routes/app";

const createContext = () => ({});

createHTTPServer({
    middleware: cors(),
    router: appRouter,
    createContext,
}).listen(5000);

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;
