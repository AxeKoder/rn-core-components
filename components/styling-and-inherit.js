import { StyleSheet, Text, View } from 'react-native';

export default function StylingAndInherit() {
	return (
		<View style={styles.container}>
			<View style={styles.darkMode}>
				<Text style={styles.darkModeText}>
					style inheritance
					<Text style={styles.boldText}> in bold</Text>
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	darkMode: {
		backgroundColor: 'black',
		padding: 60
	},
	darkModeText: {
		color: '#4ad40a',
	},
	boldText: {
		fontWeight: 'bold'
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

