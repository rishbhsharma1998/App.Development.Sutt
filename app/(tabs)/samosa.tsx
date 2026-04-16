import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, View, ScrollView, Pressable } from "react-native";

export default function Breakfast() {
  return (
    <ScrollView>
    <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://i.pinimg.com/originals/83/37/cb/8337cb8ad6be8e0e9486fd137c0f1166.jpg",
          }}
        ></Image>
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
    borderRadius: 12,
    marginBottom: 20,
  },
});
