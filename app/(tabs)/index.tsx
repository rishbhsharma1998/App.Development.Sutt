import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View, Pressable } from "react-native";

export default function Menu() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Link href="/breakfast" asChild>
        <Pressable>
          <Image
            style={styles.image}
            source={{
              uri: "https://c8.alamy.com/comp/FF3WEK/breakfast-word-written-on-notepad-FF3WEK.jpg",
            }}
          />
        </Pressable>
        </Link>
        <Text style={styles.text}>Breakfast</Text>
        <Link href="/(tabs)/lunch" asChild>
        <Pressable>
          <Image
            style={styles.image}
            source={{
              uri: "https://tse1.mm.bing.net/th/id/OIP.wtVQe_0OlZw6f1HpQbqxZAHaFQ?pid=Api&P=0&h=180",
            }}
          />
        </Pressable>
        </Link>
        <Text style={styles.text}>Lunch</Text>

        <Link href="/(tabs)/dinner" asChild>
        <Pressable>
          <Image
            style={styles.image}
            source={require("../../assets/images/dinner.jpg")}
          />
          </Pressable>
        </Link>
        <Text style={styles.text}>Dinner</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  image: {
    width: 200,
    height: 300,
  },
});
