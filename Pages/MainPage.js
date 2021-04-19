import React from 'react';
import { FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import Input from '../components/Input';
import SmallCard from '../components/SmallCard';
import { CARD, SMALL_CARD } from '../dummy-data';
const Main = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.inner}>
					<Header />
					<Input />
				</View>
			</TouchableWithoutFeedback>
			<View style={styles.card}>
				<FlatList
					data={CARD}
					renderItem={({ item }) => <Card navigation={navigation} data={item} />}
					keyExtractor={(item) => item.id}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
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
		flex: 1
	},
	card: {
		marginHorizontal: '2%'
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
