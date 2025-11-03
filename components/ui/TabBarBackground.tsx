import { BottomTabBarHeightContext } from "@react-navigation/bottom-tabs";
import { useContext } from "react";

export function useBottomTabOverflow() {
  return useContext(BottomTabBarHeightContext) ?? 0;
}
