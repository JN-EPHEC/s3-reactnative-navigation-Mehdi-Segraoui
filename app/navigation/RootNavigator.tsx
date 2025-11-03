import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SocialTabs from "../screens/SocialTabs";
import ProfileScreen from "../screens/ProfileScreen";
import { RootDrawerParamList } from "./types";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function RootNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Courses"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "rgba(15, 23, 42, 0.94)" },
        headerTintColor: "#e0f2fe",
        headerTitleStyle: { color: "#f8fafc", fontWeight: "700" },
        drawerActiveBackgroundColor: "rgba(59, 130, 246, 0.25)",
        drawerInactiveTintColor: "rgba(226, 232, 240, 0.7)",
        drawerActiveTintColor: "#f8fafc",
        drawerStyle: {
          backgroundColor: "rgba(15, 23, 42, 0.92)",
        },
      }}
    >
      <Drawer.Screen
        name="Courses"
        component={SocialTabs}
        options={{ title: "Course Finder" }}
      />
      <Drawer.Screen
        name="My Profile"
        component={ProfileScreen}
        options={{ title: "My Profile" }}
      />
    </Drawer.Navigator>
  );
}
