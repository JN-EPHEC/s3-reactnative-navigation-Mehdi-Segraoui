import React from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CourseStackParamList } from "../navigation/types";
import GradientBackground from "../../components/GradientBackground";

type Props = NativeStackScreenProps<CourseStackParamList, "CourseList">;

const COURSES = [
  {
    id: "react-native-intro",
    title: "Intro to React Native",
    description:
      "Learn the fundamentals of building cross-platform mobile apps with React Native.",
    duration: "6 weeks",
  },
  {
    id: "advanced-js",
    title: "Advanced JavaScript",
    description:
      "Master closures, async patterns, and performance optimizations in modern JavaScript.",
    duration: "4 weeks",
  },
  {
    id: "ui-ux-devs",
    title: "UI/UX for Developers",
    description:
      "Design intuitive interfaces and delightful user experiences without leaving your IDE.",
    duration: "5 weeks",
  },
];

export default function CourseListScreen({ navigation }: Props) {
  function handleSelectCourse(course: (typeof COURSES)[number]) {
    navigation.navigate("CourseDetail", {
      courseId: course.id,
      title: course.title,
      description: course.description,
    });
  }

  function renderCourseItem({
    item,
  }: {
    item: (typeof COURSES)[number];
  }) {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.card,
          pressed && styles.cardPressed,
        ]}
        onPress={() => handleSelectCourse(item)}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.meta}>Duration: {item.duration}</Text>
      </Pressable>
    );
  }

  return (
    <GradientBackground contentStyle={styles.gradientContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Trouvez votre prochaine formation
        </Text>
        <Text style={styles.subtitle}>
          Parcourez notre sélection de programmes pour enrichir vos compétences.
        </Text>
      </View>
      <FlatList
        data={COURSES}
        keyExtractor={(course) => course.id}
        renderItem={renderCourseItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  gradientContent: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#f8fafc",
    marginBottom: 6,
  },
  header: {
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 32,
  },
  card: {
    backgroundColor: "rgba(15, 23, 42, 0.65)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
    padding: 18,
    borderRadius: 18,
    shadowColor: "#0f172a",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 20,
    elevation: 6,
    marginBottom: 16,
  },
  cardPressed: {
    transform: [{ scale: 0.99 }],
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    color: "#f8fafc",
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: "rgba(226, 232, 240, 0.88)",
  },
  description: {
    fontSize: 13,
    lineHeight: 20,
    color: "rgba(226, 232, 240, 0.75)",
    marginBottom: 14,
  },
  meta: {
    fontSize: 12,
    color: "#93c5fd",
    fontWeight: "600",
  },
});
