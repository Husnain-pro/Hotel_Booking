import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import Input from '../components/Input';
const { width, height } = Dimensions.get('window');

const Main = ({ navigation }) => {
	const [CARD, setData] = useState([]);
	useEffect(() => {
		const roomsList = async () => {
			const {
				data: { data }
			} = await axios.get('http://192.168.43.28:3000/api/hotels');
			setData(data);
		};
		roomsList();
	}, []);
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.inner}>
					<Header navigation={navigation} />
					<Input />
				</View>
			</TouchableWithoutFeedback>
			{CARD && (
				<View style={styles.card}>
					<FlatList
						data={CARD}
						renderItem={({ item }) => <Card navigation={navigation} data={item} />}
						keyExtractor={(item) => item._id}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					/>
				</View>
			)}
		</View>
	);
};

export default Main;

const styles = StyleSheet.create({
	container: {
		width: width,
		height: height,
		flex: 1
	},
	card: {
		paddingHorizontal: '2%'
	},
	smallCard: {
		flex: 1,
		paddingHorizontal: '7%'
	},
	smallCardTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		paddingVertical: '2%'
	}
});
