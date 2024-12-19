import { Text, TextInput, View, StyleSheet } from "react-native";

export default function Recuperacion() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Recuperacion</Text>
        <TextInput placeholder="Email" style={styles.input} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#0084ff",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
