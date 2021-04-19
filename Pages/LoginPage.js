import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
const { width, height } = Dimensions.get('window');

const LoginPage = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.circle}></View>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Hey,</Text>
				<Text style={styles.title}>Login Now</Text>
				<Text style={{ ...styles.titleOptional, marginTop: '8%' }}>
					If you are new/{' '}
					<TouchableWithoutFeedback onPress={() => navigation.navigate('Register')}>
						<Text style={{ color: '#000', fontWeight: '400', fontSize: 17 }}> Create New</Text>
					</TouchableWithoutFeedback>
				</Text>
			</View>
			<View style={styles.form}>
				<View style={{ ...styles.search, backgroundColor: '#fdcf84' }}>
					<TextInput placeholder="Enter Email Address" style={{ width: '100%' }} />
					<Entypo name="email" size={22} color="#473333" style={{ marginLeft: '-10%' }} />
				</View>
				<View style={{ ...styles.search, backgroundColor: '#e6e0e0' }}>
					<TextInput secureTextEntry={true} placeholder="Enter Password" style={{ width: '100%' }} />
					<MaterialCommunityIcons
						name="shield-key-outline"
						size={25}
						color="#473333"
						style={{ marginLeft: '-10%' }}
					/>
				</View>
				<Text style={{ ...styles.titleOptional, marginTop: '3%' }}>
					Forgot Password/ <Text style={{ color: '#000', fontWeight: '400', fontSize: 17 }}> Reset</Text>
				</Text>
			</View>
			<View style={styles.btnContainer}>
				<View style={styles.btn}>
					<Text style={{ color: '#fff', fontWeight: '400', fontSize: 15 }}>Login</Text>
				</View>
				<TouchableWithoutFeedback pressDuration={0.0} onPress={() => navigation.navigate('Home')}>
					<Text style={{ color: '#887575', fontWeight: '400', fontSize: 15, marginTop: '5%' }}>Skip Now</Text>
				</TouchableWithoutFeedback>
			</View>
		</View>
	);
};

export default LoginPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width,
		height: height,
		marginHorizontal: '10%',
		overflow: 'hidden'
	},
	circle: {
		position: 'absolute',
		backgroundColor: '#000',
		width: 75,
		height: 50,
		borderRadius: 35,
		marginTop: 30,
		left: '-13%'
	},
	titleContainer: {
		marginTop: '45%'
	},
	title: {
		fontWeight: 'bold',
		fontSize: 28
	},
	titleOptional: {
		color: '#939688',
		fontSize: 16
	},
	form: {
		marginTop: '10%',
		marginRight: '20%'
	},
	search: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: '2%',
		alignItems: 'center',
		width: '100%',
		padding: 10,
		borderRadius: 10,
		fontSize: 20,
		borderWidth: 1,
		borderColor: '#F5F6F6'
	},
	btnContainer: {
		marginRight: '20%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '10%'
	},
	btn: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#B12341',
		paddingVertical: 15,
		borderRadius: 8
	}
});
