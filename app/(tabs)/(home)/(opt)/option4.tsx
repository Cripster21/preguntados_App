import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import useScoreAndLive, {
  ScoreAndLivesDisplay,
} from "@/components/scoreANDlive";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Opt4styles from "@/styles/optStyles";

const geographyQuestions = [
  {
    question: "¿Cuál es el río más largo del mundo?",
    options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
    correctAnswer: "Amazonas",
  },
  {
    question: "¿Cuál es el país más grande del mundo por área?",
    options: ["China", "Canadá", "Estados Unidos", "Rusia"],
    correctAnswer: "Rusia",
  },
  {
    question: "¿En qué continente se encuentra el desierto del Sahara?",
    options: ["Asia", "África", "Oceanía", "América del Sur"],
    correctAnswer: "África",
  },
  {
    question: "¿Qué océano es el más grande del mundo?",
    options: ["Atlántico", "Índico", "Pacífico", "Ártico"],
    correctAnswer: "Pacífico",
  },
  {
    question: "¿Cuál es la capital de Australia?",
    options: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra",
  },
  {
    question: "¿Cuál es el punto más alto de la Tierra?",
    options: ["Monte Everest", "K2", "Mont Blanc", "Monte McKinley"],
    correctAnswer: "Monte Everest",
  },
  {
    question: "¿Qué país tiene más islas en el mundo?",
    options: ["Filipinas", "Suecia", "Indonesia", "Japón"],
    correctAnswer: "Suecia",
  },
  {
    question: "¿En qué país se encuentra la Torre Eiffel?",
    options: ["Italia", "Francia", "España", "Reino Unido"],
    correctAnswer: "Francia",
  },
  {
    question: "¿Qué mar se encuentra entre Europa y África?",
    options: ["Mar Caribe", "Mar Mediterráneo", "Mar Báltico", "Mar Rojo"],
    correctAnswer: "Mar Mediterráneo",
  },
  {
    question: "¿Cuál es el país más poblado del mundo?",
    options: ["India", "Estados Unidos", "China", "Brasil"],
    correctAnswer: "China",
  },
];

export default function Option4() {
  const { score, lives, increaseScore, decreaseLives, reset } =
    useScoreAndLive();

  const [currentQuestion, setCurrentQuestion] = useState(
    geographyQuestions[Math.floor(Math.random() * geographyQuestions.length)]
  );

  const handleAnswer = (option: string) => {
    if (option === currentQuestion.correctAnswer) {
      if (score + 1 == 3) {
        Alert.alert("¡Felicidades!", "¡Has ganado!", [
          {
            text: "Volver al menú",
            onPress() {
              router.push("/(tabs)/(home)/menu");
            },
          },
        ]);
      } else {
        increaseScore();
        Alert.alert("¡Correcto!", "Has seleccionado la respuesta correcta.");
      }
    } else {
      decreaseLives();
      if (lives == 1) {
        Alert.alert("¡Lo siento!", "Has perdido.", [
          {
            text: "Volver al menú",
            onPress() {
              router.push("/(tabs)/(home)/menu");
            },
          },
        ]);
      } else {
        Alert.alert("Incorrecto", "Inténtalo de nuevo.");
      }
    }

    // Pasar a la siguiente pregunta
    setCurrentQuestion(
      geographyQuestions[Math.floor(Math.random() * geographyQuestions.length)]
    );
  };

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={Opt4styles.container}
    >
      <ScoreAndLivesDisplay score={score} lives={lives} />
      <Text style={Opt4styles.question}>{currentQuestion.question}</Text>

      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={Opt4styles.optionButton}
          onPress={() => handleAnswer(option)}
        >
          <Text style={Opt4styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
}
