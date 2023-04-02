import z from "zod";
import { baseProcedure, router } from "./config";

const greetingsRouter = router({
    greet: baseProcedure
        .input(
            z
                .object({
                    name: z.string().nullish(),
                })
                .nullish()
        )
        .output(
            z.object({
                text: z.string(),
            })
        )
        .query(({ input }) => {
            return {
                text: `Greetings ${input?.name}!`,
            };
        }),
});

export type GreetingsRouter = typeof greetingsRouter;
export default greetingsRouter;
