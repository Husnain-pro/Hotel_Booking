import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { listRooms } from '../actions/hotelAction';
import Card from '../components/Card';
import Header from '../components/Header';
import Input from '../components/Input';
import SmallCard from '../components/SmallCard';
import { SMALL_CARD } from '../dummy-data';

const { width, height } = Dimensions.get('window');

const Main = ({ navigation }) => {
	const [card, setCard] = useState('');
	const dispatch = useDispatch();
	const hotelList = useSelector((state) => state.hotelList);

	console.log('hotelList from Redux', hotelList);

	useEffect(() => {
		const sendGetRequest = async () => {
			try {
				const { data } = await axios.get('http://127.0.0.1:3000/api/hotels');
				setCard(data);
			} catch (err) {
				console.error(err);
			}
		};
		sendGetRequest();
	}, []);
	useEffect(() => {
		dispatch(listRooms);
	}, [dispatch]);
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.inner}>
					<Header navigation={navigation} />
					<Input />
				</View>
			</TouchableWithoutFeedback>
			{card && (
				<View style={styles.card}>
					<FlatList
						data={card.data}
						renderItem={({ item }) => <Card navigation={navigation} data={item} />}
						keyExtractor={(item) => item.id}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					/>
				</View>
			)}

			<View style={styles.smallCard}>
				<Text style={styles.smallCardTitle}>Popular House</Text>
				<FlatList
					data={SMALL_CARD}
					renderItem={({ item }) => <SmallCard navigation={navigation} data={item} />}
					keyExtractor={(item) => item.id}
					horizontal={false}
					showsVerticalScrollIndicator={false}
				/>
			</View>
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
