import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const GuessLogItem = ({ roundNumber, guess }) => {
  return <View style={styles.container}>
    <Text>#{roundNumber}</Text>
    <Text>Opponent's Guess: {guess}</Text>
  </View>
}

export default GuessLogItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.primary800,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.accent500,
    width: "100%",
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
})