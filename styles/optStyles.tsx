import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  score: {
    fontSize: 20,
    marginBottom: 10,
    color: "#4CAF50",
  },
  lives: {
    fontSize: 20,
    marginBottom: 20,
    color: "#E91E63",
  },
  question: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  optionButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderColor: "rgba(255, 255, 255, 0.76)",
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 8,
    width: "80%",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;
