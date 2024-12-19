import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "rgba(7, 102, 255, 0.3)",
    borderRadius: 15,
    borderWidth: 5,
    padding: 16,
    marginBottom: 16,
    borderColor: "rgba(255, 255, 255, 0.3)",
    boxShadow: "4px 4px 8px rgba(255, 255, 255, 0.59)",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#ffffff",
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: "#ffffff",
  },
});

export default styles;
