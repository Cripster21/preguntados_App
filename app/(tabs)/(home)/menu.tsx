import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  Easing,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";

const { width } = Dimensions.get("window");
const WHEEL_SIZE = width * 0.8; // Tamaño de la ruleta

const WheelOfFortune: React.FC = () => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const [spinning, setSpinning] = useState(false);
  const router = useRouter();

  // Opciones de la ruleta
  const segments: {
    label: string;
    route:
      | "/(tabs)/(home)/(opt)/option1"
      | "/(tabs)/(home)/(opt)/option2"
      | "/(tabs)/(home)/(opt)/option3"
      | "/(tabs)/(home)/(opt)/option4";
    color: string;
  }[] = [
    {
      label: "Matematicas",
      route: "/(tabs)/(home)/(opt)/option1",
      color: "#F94144",
    },
    {
      label: "Historia",
      route: "/(tabs)/(home)/(opt)/option2",
      color: "#F3722C",
    },
    {
      label: "Ciencias",
      route: "/(tabs)/(home)/(opt)/option3",
      color: "#F9C74F",
    },
    {
      label: "Geografia",
      route: "/(tabs)/(home)/(opt)/option4",
      color: "#43AA8B",
    },
  ];

  const segmentDegrees = 360 / segments.length;

  const spin = () => {
    if (spinning) return;

    setSpinning(true);

    // Rotación aleatoria base + adicional
    const randomSpin = Math.floor(Math.random() * 360) + 720;
    const finalAngle = randomSpin % 360;

    const selectedIndex =
      Math.floor((360 - finalAngle + segmentDegrees / 2) / segmentDegrees) %
      segments.length;

    Animated.timing(spinValue, {
      toValue: randomSpin,
      duration: 4000,
      useNativeDriver: true,
      easing: Easing.out(Easing.quad), // Efecto de desaceleración
    }).start(() => {
      router.push(segments[selectedIndex].route); // Redirigir al usuario
      setSpinning(false);
      spinValue.setValue(finalAngle); // Reiniciar el valor
    });
  };

  const rotateInterpolate = spinValue.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "400deg"],
  });

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      <Text style={styles.titulo}>Preguntados</Text>
      <View style={styles.wheelContainer}>
        <AntDesign name="caretright" style={styles.pointer} />
        <Animated.View
          style={[styles.wheel, { transform: [{ rotate: rotateInterpolate }] }]}
        >
          {segments.map((segment, index) => (
            <View
              key={index}
              style={[
                styles.segmentContainer,
                { transform: [{ rotate: `${index * segmentDegrees}deg` }] },
              ]}
            >
              <View
                style={[styles.segment, { borderBottomColor: segment.color }]}
              >
                <Text
                  style={[
                    styles.segmentText,
                    {
                      transform: [{ rotate: `${-index * segmentDegrees}deg` }],
                    },
                  ]}
                >
                  {segment.label}
                </Text>
              </View>
            </View>
          ))}
        </Animated.View>
      </View>
      <TouchableOpacity
        onPress={spin}
        style={styles.button}
        disabled={spinning}
      >
        <Text style={styles.buttonText}>
          {spinning ? "Girando..." : "Girar"}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    textTransform: "uppercase",
    color: "#ffffff",
    textShadowColor: "#e2e2e2",
    textShadowOffset: { width: 4, height: 2 },
    textShadowRadius: 5,
  },
  wheelContainer: {
    width: WHEEL_SIZE,
    height: WHEEL_SIZE,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  wheel: {
    width: WHEEL_SIZE,
    height: WHEEL_SIZE,
    borderRadius: WHEEL_SIZE / 2,
    overflow: "hidden",
  },
  segmentContainer: {
    position: "absolute",
    width: WHEEL_SIZE,
    height: WHEEL_SIZE,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  segment: {
    width: 0,
    height: 0,
    borderLeftWidth: WHEEL_SIZE / 2,
    borderRightWidth: WHEEL_SIZE / 2,
    borderBottomWidth: WHEEL_SIZE / 2,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  segmentText: {
    position: "absolute",
    top: WHEEL_SIZE / 4,
    color: "#fff",
    fontWeight: "bold",
    fontSize: WHEEL_SIZE / 20,
    textAlign: "center",
  },
  pointer: {
    position: "absolute",
    top: (WHEEL_SIZE * 2) / 4.7,
    right: (WHEEL_SIZE * 2) / 2.2,
    fontSize: 50,
    color: "#007bff",
    zIndex: 10,
  },
  button: {
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#007bff",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WheelOfFortune;
