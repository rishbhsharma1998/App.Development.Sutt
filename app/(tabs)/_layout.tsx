import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#1C1C1E",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "MENU",
          headerTitle: "Food Eatery",
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About Our Restaurant",
          headerTitle: "About Our Restaurant",
          headerTintColor: "white",
        }}
      />
      <Tabs.Screen
        name="breakfast"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="samosa"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen name="+not-found" options={{}} />
    </Tabs>
  );
}
