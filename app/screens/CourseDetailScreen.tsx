import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CourseStackParamList } from "../navigation/types";
import GradientBackground from "../../components/GradientBackground";

type Props = NativeStackScreenProps<CourseStackParamList, "CourseDetail">;

export default function CourseDetailScreen({ route }: Props) {
  const { title, description } = route.params;

  return (
    <GradientBackground contentStyle={styles.gradientContent}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerCard}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.badge}>Parcours recommandé</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Ce que vous apprendrez</Text>
          <Text style={styles.body}>{description}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Pré-requis</Text>
          <Text style={styles.body}>
            Une connaissance de base en développement JavaScript et une forte
            motivation pour progresser rapidement.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Étapes suivantes</Text>
          <Text style={styles.body}>
            Ajoutez ce cours à votre wishlist pour le retrouver facilement ou
            contactez un conseiller afin d&apos;obtenir un plan de formation
            personnalisé adapté à vos objectifs.
          </Text>
        </View>
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  gradientContent: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  content: {
    paddingBottom: 40,
  },
  headerCard: {
    backgroundColor: "rgba(15, 23, 42, 0.7)",
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(59, 130, 246, 0.25)",
    shadowColor: "#0f172a",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 16 },
    shadowRadius: 30,
    elevation: 10,
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#f8fafc",
    marginBottom: 12,
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(96, 165, 250, 0.2)",
    color: "#bfdbfe",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  section: {
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(30, 64, 175, 0.35)",
    marginBottom: 18,
  },
  sectionHeading: {
    fontSize: 15,
    fontWeight: "700",
    color: "#bfdbfe",
    letterSpacing: 0.5,
  },
  body: {
    fontSize: 14,
    lineHeight: 22,
    color: "rgba(226, 232, 240, 0.85)",
  },
});
