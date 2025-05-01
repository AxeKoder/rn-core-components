import { View, Text, StyleSheet } from 'react-native'

export default function StylingBox() {
	return (
		<View style={styles.container}>
			<View style={[styles.box, styles.lightBlueBackground, styles.boxShadow]}>
				<Text style={[{ borderRadius: 6, backgroundColor: 'red' }, styles.normalFont]}>
					light blue box
				</Text>
			</View>
			<View style={[styles.box, styles.lightGreenBackground, styles.boxShadow, styles.androidShadow]}>
				<Text style={[{ borderRadius: 6, backgroundColor: 'yellow' }, styles.normalFont]}>
					light green box
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	normalFont: {
		fontSize: 20
	},
	box: {
		width: 250,
		height: 250,
		paddingHorizontal: 10,
		paddingVertical: 20,
		marginBottom: 10,
		borderWidth: 2,
		borderColor: 'purple'
	},
	lightBlueBackground: {
		backgroundColor: 'lightblue',
	},
	lightGreenBackground: {
		backgroundColor: 'lightgreen'
	},
	boxShadow: {
		shadowColor: '#333333',
		shadowOffset: { width: 6, height: 6 },
		shadowOpacity: 0.6,
		shadowRadius: 4,
	},
	androidShadow: {
		elevation: 8,
	}
});

