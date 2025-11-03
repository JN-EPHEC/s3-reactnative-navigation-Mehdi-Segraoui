import { Stack, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text>This screen does not exist.</Text>
        <Pressable
          style={styles.link}
          onPress={() => {
            router.back();
          }}
        >
          <Text style={styles.linkLabel}>Go back</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkLabel: {
    color: "#1d4ed8",
    fontWeight: "600",
  },
});
