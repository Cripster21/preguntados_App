import React, { useState } from "react";
import { Text, TouchableOpacity, Alert } from "react-native";
import useScoreAndLive, {
  ScoreAndLivesDisplay,
} from "@/components/scoreANDlive";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Opt1styles from "@/styles/optStyles";

const mathQuestions = [
  {
    question: "¿Cuál es el resultado de 12 × 8?",
    options: ["96", "88", "104", "108"],
    correctAnswer: "96",
  },
  {
    question: "¿Cuál es el valor de π (Pi) redondeado a dos decimales?",
    options: ["3.14", "3.15", "3.13", "3.12"],
    correctAnswer: "3.14",
  },
  {
    question: "¿Cuánto es 25 ÷ 5?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "5",
  },
  {
    question: "¿Qué es un triángulo que tiene todos sus lados iguales?",
    options: ["Isósceles", "Escaleno", "Equilátero", "Rectángulo"],
    correctAnswer: "Equilátero",
  },
  {
    question: "¿Cuál es el resultado de 15²?",
    options: ["125", "200", "225", "250"],
    correctAnswer: "225",
  },
  {
    question: "¿Cómo se llama un polígono con 8 lados?",
    options: ["Hexágono", "Octágono", "Pentágono", "Decágono"],
    correctAnswer: "Octágono",
  },
  {
    question: "¿Qué fracción es equivalente a 0.25?",
    options: ["1/4", "1/3", "1/2", "3/4"],
    correctAnswer: "1/4",
  },
  {
    question: "¿Cuánto es 7 × 6?",
    options: ["42", "40", "36", "48"],
    correctAnswer: "42",
  },
  {
    question: "¿Cuál es el término para la distancia alrededor de un círculo?",
    options: ["Diámetro", "Radio", "Circunferencia", "Área"],
    correctAnswer: "Circunferencia",
  },
  {
    question: "¿Cuál es el siguiente número en la secuencia: 2, 4, 8, 16, ...?",
    options: ["24", "32", "48", "64"],
    correctAnswer: "32",
  },
];

export default function Option1() {
  const { score, lives, increaseScore, decreaseLives, reset } =
    useScoreAndLive();

  const [currentQuestion, setCurrentQuestion] = useState(
    mathQuestions[Math.floor(Math.random() * mathQuestions.length)]
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
      mathQuestions[Math.floor(Math.random() * mathQuestions.length)]
    );
  };

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={Opt1styles.container}
    >
      <ScoreAndLivesDisplay score={score} lives={lives} />
      <Text style={Opt1styles.question}>{currentQuestion.question}</Text>

      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={Opt1styles.optionButton}
          onPress={() => handleAnswer(option)}
        >
          <Text style={Opt1styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
}
