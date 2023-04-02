import { HStack, Text, Switch, useColorMode } from "native-base";
import { useGreetings } from "../shopping/hooks/useGreetings";

export function ToggleDarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();

    useGreetings();

    return (
        <HStack space={2} alignItems="center">
            <Text>Dark</Text>
            <Switch
                isChecked={colorMode === "light"}
                onToggle={toggleColorMode}
                aria-label={colorMode === "light" ? "switch to dark mode" : "switch to light mode"}
            />
            <Text>Light</Text>
        </HStack>
    );
}
