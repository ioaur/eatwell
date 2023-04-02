import { trpc } from "../../../api";

export const useGreetings = () => {
    trpc.greetings.greet.useQuery({ name: "walabe" });
    console.log("allo");
};
