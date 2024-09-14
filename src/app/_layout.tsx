import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, statusBarColor: "#000000" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="rules/index" />
    </Stack>
  );
}
