import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const GallertPage = ({ route, navigation }) => {
	const { id, lastPage } = route.params;
	const [viewImage, setViewImage] = useState(
		'https://images.unsplash.com/photo-1602497861417-a1de2b405bea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
	);
	return (
		<View style={styles.container}>
			<View style={styles.backBtn}>
				<TouchableOpacity onPress={() => navigation.navigate(lastPage)}>
					<Ionicons name="chevron-back" size={24} color="black" />
				</TouchableOpacity>
			</View>
			<Image
				style={styles.image}
				source={{
					uri: viewImage
				}}
			/>
			<View style={styles.detail}>
				<Text style={styles.detailTitle}>Detail Preview</Text>
				<View style={styles.detailCard}>
					<TouchableOpacity
						onPress={() =>
							setViewImage(
								'https://images.unsplash.com/photo-1602497861417-a1de2b405bea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
							)
						}
					>
						<View style={styles.detailImage}>
							<Image
								style={{ width: '100%', height: '100%' }}
								source={{
									uri:
										'https://images.unsplash.com/photo-1602497861417-a1de2b405bea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
								}}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							setViewImage(
								'https://images.unsplash.com/photo-1561024173-e6caebe6ddc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb218ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
							)
						}
					>
						<View style={styles.detailImage}>
							<Image
								style={{ width: '100%', height: '100%' }}
								source={{
									uri:
										'https://images.unsplash.com/photo-1561024173-e6caebe6ddc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb218ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
								}}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							setViewImage(
								'https://images.unsplash.com/photo-1555050891-f878b6570480?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvb218ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
							)
						}
					>
						<View style={styles.detailImage}>
							<Image
								style={{ width: '100%', height: '100%' }}
								source={{
									uri:
										'https://images.unsplash.com/photo-1555050891-f878b6570480?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvb218ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
								}}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default GallertPage;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	backBtn: {
		backgroundColor: '#ccb8b8',
		padding: 2,
		borderRadius: 5,
		position: 'absolute',
		top: '4%',
		left: '6%',
		zIndex: 10
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center'
	},
	detail: {
		width: '100%',
		position: 'absolute',
		bottom: 0,
		paddingBottom: '10%',
		paddingHorizontal: '3%'
	},
	detailTitle: {
		paddingBottom: 20,
		fontSize: 20,
		fontWeight: 'bold',
		color: '#F4F2F2',
		paddingLeft: 10
	},
	detailCard: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	detailImage: {
		width: 100,
		height: 100,
		borderRadius: 10,
		overflow: 'hidden'
	}
});
