// app/_layout.tsx
import React from "react";
import RootNavigator from "./navigation/RootNavigator";

export type RootStackParamList = {
  PostList: undefined;
  PostDetail: {
    postId: string;
    title: string;
    content: string;
  };
};

export default function RootLayout() {
  // Expo Router s'occupe déjà du NavigationContainer.
  // On renvoie juste notre navigator racine (le drawer).
  return <RootNavigator />;
}
