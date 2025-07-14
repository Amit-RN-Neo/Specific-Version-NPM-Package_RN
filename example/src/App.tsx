import { Text, View, StyleSheet } from 'react-native';
import { addition, multiply } from 'specific-version-rn-library';

const result = multiply(3, 9);
const resultAdd = addition(5, 18);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result Of Multiplication: {result}</Text>
      <Text style={styles.testStyle}>Result of Addition: {resultAdd}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  testStyle: {
    fontSize: 18,
    color: '#fff',
    textDecorationLine: 'underline',
    // textDecorationColor: 'red', // Line color
  },
});
