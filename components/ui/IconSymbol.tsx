import React from "react";
import { StyleProp, TextStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IconSymbolProps = {
  name: string;
  size?: number;
  color?: string;
  weight?: "light" | "regular" | "medium" | "bold";
  style?: StyleProp<TextStyle>;
};

const ICON_ALIAS: Record<string, keyof typeof Ionicons.glyphMap> = {
  "chevron.right": "chevron-forward",
};

export function IconSymbol({
  name,
  color,
  size = 16,
  style,
}: IconSymbolProps) {
  const resolvedName = ICON_ALIAS[name] ?? ("help-circle-outline" as const);

  return (
    <Ionicons name={resolvedName} color={color} size={size} style={style} />
  );
}
