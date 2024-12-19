import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
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
      }}
    >
      <Stack.Screen
        name="option1"
        options={{ headerTitle: "Matematicas", headerLeft: () => <></> }}
      />
      <Stack.Screen
        name="option2"
        options={{ headerTitle: "Historia", headerLeft: () => <></> }}
      />
      <Stack.Screen
        name="option3"
        options={{ headerTitle: "Ciencias", headerLeft: () => <></> }}
      />
      <Stack.Screen
        name="option4"
        options={{ headerTitle: "Geografia", headerLeft: () => <></> }}
      />
    </Stack>
  );
}
