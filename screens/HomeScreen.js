// screens/HomeScreen.js
import { View, Text, StyleSheet, Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ navigation, route }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>{route.params?.result}</Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate(
            'About', 
            { name: 'React' }
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default HomeScreen;