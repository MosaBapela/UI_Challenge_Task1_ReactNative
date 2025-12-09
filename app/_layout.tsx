import { Stack } from "expo-router";

// Hide the native stack header (which renders as a top white bar on web)
// We keep the app's own header inside screens so design is preserved.
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
