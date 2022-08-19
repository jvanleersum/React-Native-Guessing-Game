import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameOverScreen = ({ phoneTries, userNumber, onStartsNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  let imageMargin = 36;

  if (width > 500) {
    imageSize = 100;
    imageMargin = 28;
  };

  const imagestyle = {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize / 2,
    margin: imageMargin
  };

  return (
    <View style={styles.screen}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer, imagestyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlightedText}>{phoneTries}</Text> rounds to guess
        the number <Text style={styles.highlightedText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartsNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // height: deviceWidth * 0.8,
    // width: deviceWidth * 0.8,
    // borderRadius: deviceWidth * 0.4,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    // margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightedText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary600,
    fontSize: 30,
  },
});
