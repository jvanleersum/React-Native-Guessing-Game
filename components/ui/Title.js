import { Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const Title = (props) => {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'whitesmoke',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'whitesmoke',
    padding: 12
  }
});