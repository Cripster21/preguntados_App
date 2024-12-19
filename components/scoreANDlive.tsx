import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Asegúrate de tener react-native-vector-icons instalado

export default function useScoreAndLives() {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  const increaseScore = () => setScore(score + 1);
  const decreaseLives = () => setLives(Math.max(lives - 1, 0));
  const reset = () => {
    setScore(0);
    setLives(3);
  };

  return {
    score,
    lives,
    increaseScore,
    decreaseLives,
    reset,
  };
}

export function ScoreAndLivesDisplay({
  score,
  lives,
}: {
  score: number;
  lives: number;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text style={styles.label}>Puntaje:</Text>
        <Text style={styles.score}>{score}</Text>
      </View>
      <View style={styles.livesContainer}>
        <Text style={styles.label}>Vidas:</Text>
        <View style={styles.hearts}>
          {Array.from({ length: 3 }, (_, index) => (
            <FontAwesome
              key={index}
              name={index < lives ? "heart" : "heart-o"}
              size={24}
              color="#ff0728"
              style={styles.heart}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
    borderWidth: 5,
    backgroundColor: "rgba(255, 255, 255, 0.59)",
    borderColor: "rgba(255, 255, 255, 0.76)",
    borderRadius: 10,
  },
  scoreContainer: {
    alignItems: "center",
  },
  livesContainer: {
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  score: {
    fontSize: 20,
    color: "#00ff2a",
    fontWeight: "bold",
  },
  hearts: {
    flexDirection: "row",
  },
  heart: {
    marginHorizontal: 5,
  },
});
