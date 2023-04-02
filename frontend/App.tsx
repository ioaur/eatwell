import React from "react";
import { Text, HStack, Center, Heading, NativeBaseProvider, VStack, Button } from "native-base";
import { ToggleDarkMode } from "./src/core/theme/ToggleTheme";
import { trpc } from "./src/api";
import { httpBatchLink } from "@trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const BACKEND_URL: string = "http://192.168.2.23:5000";

const queryClient = new QueryClient();
const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url: BACKEND_URL,
        }),
    ],
});

export default function App() {
    return (
        <NativeBaseProvider>
            <trpc.Provider client={trpcClient} queryClient={queryClient}>
                <QueryClientProvider client={queryClient}>
                    <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }} px={4} flex={1}>
                        <VStack space={5} alignItems="center">
                            <Heading size="lg">Welcome to Eatwell</Heading>

                            <HStack space={2} alignItems="center">
                                <Text>Greetings</Text>
                                <Button onPress={() => console.log("allo")}>Click me!</Button>
                            </HStack>

                            <ToggleDarkMode />
                        </VStack>
                    </Center>
                </QueryClientProvider>
            </trpc.Provider>
        </NativeBaseProvider>
    );
}
