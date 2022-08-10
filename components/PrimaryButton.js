import { View, Text, StyleSheet } from "react-native";

const PrimaryButton = (props) => {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>
        {props.children}
      </Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    width: 100,
    margin: 8,
    padding: 8,
    backgroundColor: "lightgrey",
    borderRadius: 6,
  },
  text: {
    color: "#5f5feb",
    textAlign: "center",
  },
});
