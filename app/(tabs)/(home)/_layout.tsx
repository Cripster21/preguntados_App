import React from "react";
import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgba(5, 42, 122, 0.77)",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="menu"
        options={{ headerTitle: "Menu", headerLeft: () => <></> }}
      />
      <Stack.Screen name="(opt)" options={{ headerShown: false }} />
    </Stack>
  );
}
