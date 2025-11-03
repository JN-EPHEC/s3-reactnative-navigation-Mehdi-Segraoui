import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DrawerActions,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import CourseListScreen from "./CourseListScreen";
import CourseDetailScreen from "./CourseDetailScreen";
import WishlistScreen from "./WishlistScreen";
import {
  CourseStackParamList,
  CoursesTabParamList,
} from "../navigation/types";

const Tab = createBottomTabNavigator<CoursesTabParamList>();
const Stack = createNativeStackNavigator<CourseStackParamList>();

type GenericNavigation = NavigationProp<ParamListBase>;

function DrawerToggleButton({ navigation }: { navigation: GenericNavigation }) {
  function handlePress() {
    let current: GenericNavigation | undefined = navigation;
    let parent = current;

    while (parent?.getParent) {
      const maybeParent = parent.getParent();
      if (!maybeParent) {
        break;
      }
      parent = maybeParent;
    }

    (parent ?? current)?.dispatch(DrawerActions.openDrawer());
  }

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Open navigation menu"
      onPress={handlePress}
      style={styles.menuButton}
    >
      <View style={styles.menuLine} />
      <View style={styles.menuLine} />
      <View style={styles.menuLine} />
    </Pressable>
  );
}

function CoursesStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "transparent" },
        headerStyle: { backgroundColor: "rgba(15, 23, 42, 0.92)" },
        headerTitleStyle: {
          color: "#f8fafc",
          fontSize: 16,
          fontWeight: "700",
        },
        headerTintColor: "#e0f2fe",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="CourseList"
        component={CourseListScreen}
        options={({ navigation }) => ({
          title: "All Courses",
          headerLeft: () => (
            <DrawerToggleButton navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}

export default function SocialTabs() {
  return (
    <Tab.Navigator
      initialRouteName="All Courses"
      screenOptions={{
        tabBarActiveTintColor: "#f8fafc",
        tabBarInactiveTintColor: "rgba(191, 219, 254, 0.6)",
        headerTitleAlign: "center",
        headerTintColor: "#e0f2fe",
        headerStyle: {
          backgroundColor: "rgba(15, 23, 42, 0.92)",
        },
        headerTitleStyle: {
          color: "#f8fafc",
          fontSize: 16,
          fontWeight: "700",
        },
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 12,
          borderRadius: 24,
          height: 70,
          paddingBottom: 14,
          paddingTop: 10,
          elevation: 12,
        },
        tabBarLabelStyle: {
          fontWeight: "600",
          fontSize: 12,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={["rgba(30, 64, 175, 0.92)", "rgba(59, 130, 246, 0.74)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tab.Screen
        name="All Courses"
        component={CoursesStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="My Wishlist"
        component={WishlistScreen}
        options={({ navigation }) => ({
          title: "My Wishlist",
          headerLeft: () => (
            <DrawerToggleButton navigation={navigation} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    marginLeft: 12,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  menuLine: {
    width: 18,
    height: 2,
    backgroundColor: "#1f2937",
    marginVertical: 2,
    borderRadius: 1,
  },
});
