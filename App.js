import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString("tr-TR", { hour12: false });
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Sedat Kurtuldu</Text>
      <Text style={styles.clock}>{currentTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  clock: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#007AFF",
  },
});

export default App;
