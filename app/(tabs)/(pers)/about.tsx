import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AboutStyles from "@/styles/aboutStyles";

export default function about() {
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={AboutStyles.container}
    >
      <ScrollView>
        <View style={AboutStyles.card}>
          <Text style={AboutStyles.title}>Acerca de</Text>
          <Text style={AboutStyles.text}>
            Esta aplicación fue creada por Benjamin Garrido con la intencion de
            crear una aplicacion de entretenimiento educativa para los
            estudiantes que les guste aprender.
          </Text>
        </View>
        <View style={AboutStyles.card}>
          <Text style={AboutStyles.title}>Funcionalidades</Text>
          <Text style={AboutStyles.text}>
            La aplicación cuenta con una pantalla de inicio y una pantalla
            personal.
          </Text>
          <Text style={AboutStyles.text}>
            La pantalla de inicio muestra una ruleta de colores que te permite
            escojer entre tipos de preguntas.
          </Text>
          <Text style={AboutStyles.text}>
            Una ves escojida la pregunta, se muestra una pantalla con la
            pregunta y las opciones de respuesta ademas de las vidas y puntos
            del usuario.
          </Text>
        </View>
        <View style={AboutStyles.card}>
          <Text style={AboutStyles.title}>Tecnologías</Text>
          <Text style={AboutStyles.text}>
            La aplicación fue creada con React Native y Expo Go.
          </Text>
          <Text style={AboutStyles.text}>
            Para la navegación se utilizó Expo Router.
          </Text>
          <Text style={AboutStyles.text}>
            Para los iconos se utilizó react-native-vector-icons.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
