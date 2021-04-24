import { Fontisto, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
const Card = ({ data, navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<TouchableWithoutFeedback
					onPress={() => navigation.navigate('Detail', { id: data.id, lastPage: 'Home' })}
				>
					<Image
						style={{ width: '100%', height: 200 }}
						source={{
							uri: data.image
						}}
					/>
				</TouchableWithoutFeedback>
				<View style={styles.cardContent}>
					<View>
						<Text style={styles.title}>{data.title}</Text>
						<Text style={styles.subTitle}>{data.subTitle}</Text>
					</View>
					<View style={styles.stars}>
						<MaterialIcons name="star" size={17} color="orange" />
						<MaterialIcons name="star" size={17} color="orange" />
						<MaterialIcons name="star" size={17} color="orange" />
						<MaterialIcons name="star-half" size={17} color="orange" />
						<MaterialIcons name="star-outline" size={17} color="orange" />
					</View>
				</View>
				<View style={styles.cardBtn}>
					<View style={styles.btn}>
						<View style={styles.btnIcon}>
							<Fontisto name="wifi" size={12} color="#fa6f7b" />
						</View>
						<Text>Wifi</Text>
					</View>
					<View style={styles.btn}>
						<View style={styles.btnIcon}>
							<Ionicons name="ios-bed-outline" size={18} color="#fa6f7b" />
						</View>
						<Text>{data.bedroom}:Bedroom</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Card;

const styles = StyleSheet.create({
	container: {
		marginTop: '8%',
		marginBottom: '1%',
		paddingHorizontal: 4
	},
	card: {
		height: 310,
		width: 230,
		backgroundColor: 'white',
		elevation: 1,
		borderRadius: 5,
		overflow: 'hidden'
	},
	cardContent: {
		flexDirection: 'row',
		padding: 10,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	title: {
		fontWeight: 'bold',
		fontSize: 16
	},
	subTitle: {
		fontSize: 13,
		fontWeight: '300',
		color: '#9c8686'
	},
	stars: {
		flexDirection: 'row'
	},
	cardBtn: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 5,
		paddingHorizontal: 10,
		alignItems: 'center'
	},
	btn: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderWidth: 0.7,
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderRadius: 5,
		borderColor: '#fa6f7b'
	},
	btnIcon: {
		marginRight: 8
	}
});
