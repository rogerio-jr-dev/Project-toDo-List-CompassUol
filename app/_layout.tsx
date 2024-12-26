import { Stack } from "expo-router";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../src/styles/theme"; 

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen options={{ headerShown: false }} name="index" />
        <Stack.Screen options={{ headerShown: false }} name="home" />
      </Stack>
    </ThemeProvider>
  );
}
