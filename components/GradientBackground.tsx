import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  children: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
};

export default function GradientBackground({
  children,
  contentStyle,
}: Props) {
  const primaryMotion = useRef(new Animated.Value(0)).current;
  const secondaryMotion = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const primaryAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(primaryMotion, {
          toValue: 1,
          duration: 6000,
          useNativeDriver: true,
        }),
        Animated.timing(primaryMotion, {
          toValue: 0,
          duration: 6000,
          useNativeDriver: true,
        }),
      ])
    );

    const secondaryAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(secondaryMotion, {
          toValue: 0,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(secondaryMotion, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true,
        }),
      ])
    );

    primaryAnimation.start();
    secondaryAnimation.start();

    return () => {
      primaryAnimation.stop();
      secondaryAnimation.stop();
    };
  }, [primaryMotion, secondaryMotion]);

  const primaryStyle = {
    transform: [
      {
        translateX: primaryMotion.interpolate({
          inputRange: [0, 1],
          outputRange: [-40, 40],
        }),
      },
      {
        translateY: primaryMotion.interpolate({
          inputRange: [0, 1],
          outputRange: [20, -20],
        }),
      },
    ],
  };

  const secondaryStyle = {
    transform: [
      {
        translateX: secondaryMotion.interpolate({
          inputRange: [0, 1],
          outputRange: [50, -30],
        }),
      },
      {
        translateY: secondaryMotion.interpolate({
          inputRange: [0, 1],
          outputRange: [-10, 25],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0f172a", "#1d4ed8", "#3b82f6"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <Animated.View
        style={[styles.blob, styles.primaryBlob, primaryStyle]}
        pointerEvents="none"
      />
      <Animated.View
        style={[styles.blob, styles.secondaryBlob, secondaryStyle]}
        pointerEvents="none"
      />
      <View style={[styles.content, contentStyle]}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  content: {
    flex: 1,
  },
  blob: {
    position: "absolute",
    width: 240,
    height: 240,
    borderRadius: 160,
    opacity: 0.28,
  },
  primaryBlob: {
    top: -60,
    left: -80,
    backgroundColor: "#60a5fa",
  },
  secondaryBlob: {
    bottom: -80,
    right: -60,
    backgroundColor: "#1e40af",
  },
});
