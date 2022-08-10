import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#72063c",
    borderRadius: 8,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  numberInput: {
    
  }
});
