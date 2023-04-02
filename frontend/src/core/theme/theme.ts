import { extendTheme } from "native-base";

// Define the config
const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
};

export const theme = extendTheme({ config });
type AppThemeType = typeof theme;

declare module "native-base" {
    interface ICustomTheme extends AppThemeType {}
}
