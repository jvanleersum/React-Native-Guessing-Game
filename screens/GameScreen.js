import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    if (direction === 'higher') {
      minBoundary = currentGuess
    } else { 
      maxBoundary = currentGuess + 1
    }
    newGuess = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newGuess)
    if (newGuess === userNumber) {
      Alert.alert("Game Over", "Your number was guessed!")
    } else {
      console.log(currentGuess)
    }
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(null, 'higher')}>+</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(null, 'lower')}>-</PrimaryButton>
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonContainer: {
    flex: 1,
  },
});
