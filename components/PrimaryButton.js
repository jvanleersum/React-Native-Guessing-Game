import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/colors";

const PrimaryButton = (props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={props.onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.text}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 8,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    padding: 8,
    backgroundColor: Colors.primary500,
    elevation: 2,
  },
  text: {
    color: "whitesmoke",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
