import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
	return (
		<View style={styles.container}>
			<View style={styles.containerLeft}>
				<View style={styles.location}>
					<Text style={styles.locationTitle}>Location</Text>
					<AntDesign name="down" size={14} color="#FC6473" style={{ paddingLeft: 6, paddingTop: 3 }} />
				</View>
				<View style={styles.title}>
					<MaterialIcons name="location-on" size={24} color="#FC6473" />
					<Text style={styles.titleText}>Solo, Indonesia</Text>
				</View>
			</View>
			<View style={styles.containerRight}>
				<TouchableOpacity>
					<View style={styles.rightIcon}>
						<Ionicons name="notifications" size={24} color="black" />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: 30,
		marginHorizontal: '8%'
	},
	containerLeft: {
		flexDirection: 'column'
	},
	location: {
		flexDirection: 'row',
		alignItems: 'center',
		alignContent: 'center'
	},
	locationTitle: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	title: {
		flexDirection: 'row',
		alignItems: 'baseline',
		paddingTop: 25
	},
	titleText: {
		fontWeight: 'bold',
		fontSize: 18,
		paddingLeft: 5
	},
	rightIcon: {
		backgroundColor: 'white',
		padding: 5,
		elevation: 2,
		borderRadius: 10
	}
});
