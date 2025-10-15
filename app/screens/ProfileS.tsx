import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileS() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>John Doe</Text>
      <Text style={styles.subtitle}>@johndoe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 6 },
  subtitle: { fontSize: 16, color: "#666" },
});
