import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import GradientBackground from "../../components/GradientBackground";

export default function WishlistScreen() {
  return (
    <GradientBackground contentStyle={styles.gradientContent}>
      <View style={styles.card}>
        <Text style={styles.title}>Votre wishlist est vide</Text>
        <Text style={styles.subtitle}>
          Enregistrez vos formations favorites pour les retrouver facilement
          lorsque vous serez prêt à démarrer un nouveau parcours.
        </Text>
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
          <Text style={styles.buttonText}>Découvrir les parcours</Text>
        </Pressable>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  gradientContent: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: "rgba(15, 23, 42, 0.7)",
    borderRadius: 22,
    paddingVertical: 32,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: "rgba(59, 130, 246, 0.25)",
    alignItems: "center",
    shadowColor: "#0f172a",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 18 },
    shadowRadius: 28,
    elevation: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#f8fafc",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: "rgba(226, 232, 240, 0.85)",
    textAlign: "center",
    marginTop: 12,
  },
  button: {
    marginTop: 24,
    backgroundColor: "rgba(59, 130, 246, 0.9)",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(191, 219, 254, 0.4)",
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  buttonText: {
    color: "#f8fafc",
    fontWeight: "700",
    fontSize: 14,
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
});
