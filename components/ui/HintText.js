import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const HintText = ({children, style}) => {
  return <Text style={[styles.hintText, style]}>{children}</Text>
}

export default HintText;

const styles = StyleSheet.create({
  hintText: {
    color: Colors.accent500,
    fontSize: 24
  },
})