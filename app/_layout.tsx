import React from "react";
import { Stack } from "expo-router";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../src/styles/theme";
import { AuthProvider } from "../src/services/AuthContext";
import {
  Inter_400Regular,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_900Black,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Stack>
          <Stack.Screen options={{ headerShown: false }} name="index" />
          <Stack.Screen options={{ headerShown: false }} name="home" />
        </Stack>
      </ThemeProvider>
    </AuthProvider>
  );
}
