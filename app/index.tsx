import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
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
        <ImageBackground
          key={joke?.setup}
          source={require("@/assets/images/background.png")}
          style={styles.imageBackground}
        >
          <View style={styles.jokeContainer}>
            <Text style={styles.jokeText}>{joke?.setup}</Text>
            <Text style={styles.jokeText}>{joke?.punchline}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  jokeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  jokeText: {
    color: "#000",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default Index;
