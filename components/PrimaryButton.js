import { View, Text, StyleSheet, Pressable } from "react-native";

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
        android_ripple={{ color: "#5c0531" }}
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
    backgroundColor: "#72063c",
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
