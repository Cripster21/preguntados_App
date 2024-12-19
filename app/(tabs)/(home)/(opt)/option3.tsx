import React, { useState } from "react";
import { Text, TouchableOpacity, Alert } from "react-native";
import useScoreAndLive, {
  ScoreAndLivesDisplay,
} from "@/components/scoreANDlive";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Opt3styles from "@/styles/optStyles";

const scienceQuestions = [
  {
    question: "¿Qué planeta es conocido como el planeta rojo?",
    options: ["Venus", "Marte", "Júpiter", "Saturno"],
    correctAnswer: "Marte",
  },
  {
    question: "¿Cuál es el elemento químico con el símbolo H?",
    options: ["Helio", "Hidrógeno", "Mercurio", "Hafnio"],
    correctAnswer: "Hidrógeno",
  },
  {
    question:
      "¿Cómo se llama el proceso por el cual las plantas producen su alimento?",
    options: ["Respiración", "Fotosíntesis", "Fermentación", "Evaporación"],
    correctAnswer: "Fotosíntesis",
  },
  {
    question: "¿Cuál es la unidad básica de la vida?",
    options: ["Tejido", "Célula", "Órgano", "Molécula"],
    correctAnswer: "Célula",
  },
  {
    question: "¿Qué tipo de animal es un tiburón?",
    options: ["Mamífero", "Ave", "Reptil", "Pez"],
    correctAnswer: "Pez",
  },
  {
    question: "¿Qué fuerza nos mantiene en la superficie de la Tierra?",
    options: ["Fricción", "Magnetismo", "Gravedad", "Energía cinética"],
    correctAnswer: "Gravedad",
  },
  {
    question: "¿Qué gas es esencial para que los humanos respiren?",
    options: ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Helio"],
    correctAnswer: "Oxígeno",
  },
  {
    question:
      "¿Qué órgano es responsable de bombear sangre en el cuerpo humano?",
    options: ["Cerebro", "Pulmones", "Corazón", "Riñones"],
    correctAnswer: "Corazón",
  },
  {
    question: "¿Qué planeta tiene anillos visibles desde la Tierra?",
    options: ["Marte", "Urano", "Neptuno", "Saturno"],
    correctAnswer: "Saturno",
  },
  {
    question: "¿Cómo se llama el cambio de estado de sólido a líquido?",
    options: ["Fusión", "Evaporación", "Sublimación", "Condensación"],
    correctAnswer: "Fusión",
  },
];

export default function Option3() {
  const { score, lives, increaseScore, decreaseLives, reset } =
    useScoreAndLive();

  const [currentQuestion, setCurrentQuestion] = useState(
    scienceQuestions[Math.floor(Math.random() * scienceQuestions.length)]
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
      scienceQuestions[Math.floor(Math.random() * scienceQuestions.length)]
    );
  };

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={Opt3styles.container}
    >
      <ScoreAndLivesDisplay score={score} lives={lives} />
      <Text style={Opt3styles.question}>{currentQuestion.question}</Text>

      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={Opt3styles.optionButton}
          onPress={() => handleAnswer(option)}
        >
          <Text style={Opt3styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
}
