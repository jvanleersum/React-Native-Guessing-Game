import { Text, StyleSheet} from 'react-native';

const Title = (props) => {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'whitesmoke',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'whitesmoke',
    padding: 12
  }
});