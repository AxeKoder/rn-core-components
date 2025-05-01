import { View, Text, StyleSheet } from 'react-native'

export default function Greet({ name }) {
    return (
        <View>
            <Text style={styles.normalFont}>Hello, {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  normalFont: {
    fontSize: 40,
    color: 'black'
  }
})