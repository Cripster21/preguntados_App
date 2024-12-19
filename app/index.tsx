import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import IndexStyles from "@/styles/indexStyles";

export default function App() {
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={IndexStyles.container}
    >
      <Image
        source={require("@/assets/images/logo.png")}
        style={IndexStyles.logo}
        resizeMode="contain"
      />
      <View style={IndexStyles.card}>
        <Text style={IndexStyles.title}>Preguntados</Text>
        <TouchableOpacity
          style={IndexStyles.button}
          onPress={() => {
            router.push("/(tabs)/(home)/menu");
          }}
        >
          <Text style={IndexStyles.buttonText}>Jugar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
