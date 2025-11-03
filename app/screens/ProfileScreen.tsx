import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GradientBackground from "../../components/GradientBackground";

export default function ProfileScreen() {
  return (
    <GradientBackground contentStyle={styles.gradientContent}>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Mehdi Segraoui</Text>
        <Text style={styles.username}>@course_hunter</Text>
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Cours terminés</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Certifications</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Wishlist</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objectif du moment</Text>
          <Text style={styles.sectionBody}>
            Devenir expert en développement mobile cross-platform et concevoir
            des expériences utilisateur haut de gamme.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Prochaines étapes</Text>
          <Text style={styles.sectionBody}>
            Suivre « Architectures avancées React Native » et planifier une
            session de coaching UX d&apos;ici la fin du mois.
          </Text>
        </View>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  gradientContent: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  card: {
    backgroundColor: "rgba(15, 23, 42, 0.72)",
    borderRadius: 26,
    paddingHorizontal: 28,
    paddingVertical: 36,
    borderWidth: 1,
    borderColor: "rgba(96, 165, 250, 0.35)",
    shadowColor: "#0f172a",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 18 },
    shadowRadius: 30,
    elevation: 14,
    alignItems: "center",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 3,
    borderColor: "rgba(191, 219, 254, 0.6)",
  },
  name: {
    fontSize: 24,
    fontWeight: "800",
    color: "#f8fafc",
    marginTop: 16,
  },
  username: {
    fontSize: 15,
    color: "rgba(191, 219, 254, 0.8)",
    marginTop: 6,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 28,
  },
  stat: {
    flex: 1,
    backgroundColor: "rgba(30, 64, 175, 0.45)",
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(96, 165, 250, 0.3)",
    marginHorizontal: 6,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "800",
    color: "#f8fafc",
  },
  statLabel: {
    fontSize: 12,
    color: "rgba(226, 232, 240, 0.7)",
    marginTop: 4,
  },
  section: {
    width: "100%",
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(37, 99, 235, 0.35)",
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#bfdbfe",
    marginBottom: 8,
  },
  sectionBody: {
    fontSize: 14,
    lineHeight: 22,
    color: "rgba(226, 232, 240, 0.84)",
  },
});
