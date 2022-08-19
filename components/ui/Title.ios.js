import { Text, StyleSheet, Platform} from 'react-native';

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
    padding: 12
  }
});