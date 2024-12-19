import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "rgba(5, 42, 122, 0.77)",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ccc",
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(pers)"
        options={{
          headerShown: false,
          title: "Personal",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
