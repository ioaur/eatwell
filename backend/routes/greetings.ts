import z from "zod";
import { publicProcedure, router } from "./app";

const greetingsRouter = router({
    greeting: publicProcedure
        .input(
            z
                .object({
                    name: z.string().nullish(),
                })
                .nullish()
        )
        .query(({ input }) => {
            return {
                text: `Greetings ${input?.name}!`,
            };
        }),
});

export type GreetingsRouter = typeof greetingsRouter;
export default greetingsRouter;
