import { View, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    marginHorizontal: 24,
    marginTop: 36,
    padding: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
})