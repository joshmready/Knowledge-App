import { useColorScheme } from "react-native";
import {DarkTheme, DefaultTheme} from 'react-native-paper';

const KNOWLEDGE_RED = '#B71C1C';

export default function useTheme() {
    const colorScheme = useColorScheme();

    const baseTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

    const theme = {
        ...baseTheme,
        colors: {
            ...baseTheme.colors,
            primary: KNOWLEDGE_RED,
        },
    };

    return theme;
}