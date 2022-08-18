import { Text, StyleSheet} from 'react-native';

const Title = (props) => {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: "#ddb52f",
    textAlign: 'center',
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12
  }
});