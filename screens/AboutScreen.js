// screens/AboutScreen.js
import { View, Text, StyleSheet, Button } from 'react-native';
import { useLayoutEffect } from 'react'

const AboutScreen = ({ route, navigation }) => {
  const { name } = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    })
  }, [navigation, name])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button 
        title="Update the name"
        onPress={() => navigation.setParams({ name: '테스트'}) }
      />
      <Button 
        title="Go back with data"
        onPress={() => 
          navigation.navigate("Home", { result: "About에서 간 데이터" })
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
    paddingTop: 32,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});


export default AboutScreen;