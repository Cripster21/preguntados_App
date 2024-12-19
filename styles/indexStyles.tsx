import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "absolute",
    top: 30,
    width: "50%",
  },
  card: {
    top: 30,
    backgroundColor: "rgba(7, 102, 255, 0.3)",
    padding: 20,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "rgba(255, 255, 255, 0.3)",
    boxShadow: "4px 4px 8px rgba(255, 255, 255, 0.59)",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#ffffff",
    textShadowColor: "#e2e2e2",
    textShadowOffset: { width: 4, height: 2 },
    textShadowRadius: 5,
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
