import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const SmallCard = ({ data }) => {
	return (
		<View style={styles.container}>
			<Image
				style={{ width: '40%', height: 90 }}
				source={{
					uri: data.image
				}}
			/>
			<View style={styles.cardContent}>
				<View style={styles.title}>
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
		</View>
	);
};

export default SmallCard;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		elevation: 1,
		borderRadius: 10,
		overflow: 'hidden',
		marginBottom: '1%'
	},
	cardContent: {
		flexDirection: 'column',
		paddingLeft: '5%'
	},
	stars: {
		flexDirection: 'row'
	},
	title: {
		fontWeight: 'bold',
		fontSize: 16
	},
	subTitle: {
		fontSize: 13,
		fontWeight: '300',
		color: '#9c8686'
	}
});
