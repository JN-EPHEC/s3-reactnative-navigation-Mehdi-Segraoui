declare module "expo-linear-gradient" {
  import * as React from "react";
  import { ViewProps } from "react-native";

  export type LinearGradientPoint = { x: number; y: number };

  export interface LinearGradientProps extends ViewProps {
    colors: string[];
    start?: LinearGradientPoint;
    end?: LinearGradientPoint;
    locations?: number[];
  }

  export const LinearGradient: React.ComponentType<LinearGradientProps>;
}
