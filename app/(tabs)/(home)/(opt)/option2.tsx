import React, { useState } from "react";
import { Text, TouchableOpacity, Alert } from "react-native";
import useScoreAndLive, {
  ScoreAndLivesDisplay,
} from "@/components/scoreANDlive";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Opt2styles from "@/styles/optStyles";

const historyQuestions = [
  {
    question: "¿En qué año llegó Cristóbal Colón a América?",
    options: ["1490", "1492", "1500", "1485"],
    correctAnswer: "1492",
  },
  {
    question: "¿Quién fue el primer presidente de los Estados Unidos?",
    options: [
      "Abraham Lincoln",
      "Thomas Jefferson",
      "George Washington",
      "John Adams",
    ],
    correctAnswer: "George Washington",
  },
  {
    question: "¿En qué año comenzó la Primera Guerra Mundial?",
    options: ["1914", "1918", "1939", "1945"],
    correctAnswer: "1914",
  },
  {
    question: "¿Qué civilización construyó las pirámides de Egipto?",
    options: ["Romanos", "Mayas", "Egipcios", "Incas"],
    correctAnswer: "Egipcios",
  },
  {
    question:
      "¿Quién fue el líder del Imperio Francés durante las Guerras Napoleónicas?",
    options: ["Luis XIV", "Napoleón Bonaparte", "Carlos Magno", "Enrique IV"],
    correctAnswer: "Napoleón Bonaparte",
  },
  {
    question: "¿Qué país fue el primero en enviar un ser humano al espacio?",
    options: ["Estados Unidos", "China", "Unión Soviética", "Alemania"],
    correctAnswer: "Unión Soviética",
  },
  {
    question:
      "¿Quién escribió la Declaración de Independencia de los Estados Unidos?",
    options: [
      "George Washington",
      "Benjamin Franklin",
      "Thomas Jefferson",
      "Alexander Hamilton",
    ],
    correctAnswer: "Thomas Jefferson",
  },
  {
    question: "¿Qué evento marcó el inicio de la Segunda Guerra Mundial?",
    options: [
      "El ataque a Pearl Harbor",
      "La invasión de Polonia",
      "La caída de Francia",
      "La Batalla de Inglaterra",
    ],
    correctAnswer: "La invasión de Polonia",
  },
  {
    question: "¿Qué guerra tuvo lugar entre 1950 y 1953?",
    options: [
      "Guerra de Corea",
      "Guerra de Vietnam",
      "Primera Guerra Mundial",
      "Segunda Guerra Mundial",
    ],
    correctAnswer: "Guerra de Corea",
  },
  {
    question:
      "¿Quién fue conocido como el Padre de la Independencia de México?",
    options: [
      "José María Morelos",
      "Benito Juárez",
      "Miguel Hidalgo",
      "Porfirio Díaz",
    ],
    correctAnswer: "Miguel Hidalgo",
  },
];

export default function Option2() {
  const { score, lives, increaseScore, decreaseLives, reset } =
    useScoreAndLive();

  const [currentQuestion, setCurrentQuestion] = useState(
    historyQuestions[Math.floor(Math.random() * historyQuestions.length)]
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
      historyQuestions[Math.floor(Math.random() * historyQuestions.length)]
    );
  };

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={Opt2styles.container}
    >
      <ScoreAndLivesDisplay score={score} lives={lives} />
      <Text style={Opt2styles.question}>{currentQuestion.question}</Text>

      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={Opt2styles.optionButton}
          onPress={() => handleAnswer(option)}
        >
          <Text style={Opt2styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
}
