import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";

type Joke = {
  setup: string;
  punchline: string;
};

const Index: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
      );
      const data: Joke = await response.json();
      console.log(data);
      setJoke(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <TouchableWithoutFeedback onPress={handleRefresh}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("@/assets/images/tap_to_change.png")}
        />
        <View style={styles.jokeContainer}>
          <Text style={styles.setupText}>{joke?.setup}</Text>
          <Text style={styles.punchlineText}>{joke?.punchline}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B1A55",
  },
  image: {
    width: 300,
    height: 100,
    marginBottom: 20,
  },
  jokeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  setupText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 24,
  },
  punchlineText: {
    color: "#ffffff",
    fontStyle: "italic",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 20,
  },
});

export default Index;
