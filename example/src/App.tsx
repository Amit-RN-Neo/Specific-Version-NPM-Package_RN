import { Text, View, StyleSheet } from 'react-native';
import { addition, multiply } from 'specific-version-rn-library';

const result = multiply(5, 7);
const additionResult = addition(5, 7);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.testStyle}>Mutliply Result: {result}</Text>
      <Text style={styles.testStyle}>Addition Result: {additionResult}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  testStyle: {
    fontSize: 18,
    color: '#000000',
    textDecorationLine: 'underline',
    // textDecorationColor: 'red', // Line color
  },
});
