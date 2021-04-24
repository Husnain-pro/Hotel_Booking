import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const { width, height } = Dimensions.get('window');
const ProfilePage = ({ navigation, route }) => {
	const { lastPage } = route.params;
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.backBtn}>
					<TouchableOpacity pressDuration={0.1} onPress={() => navigation.navigate(lastPage)}>
						<Ionicons name="caret-back-outline" size={24} color="#9B9DB1" />
					</TouchableOpacity>
				</View>
				<View style={{ alignItems: 'center', justifyContent: 'center', width: width }}>
					<Text style={{ fontSize: 24, fontWeight: 'bold' }}>Profile</Text>
				</View>
			</View>
			<View style={styles.avatarContainer}>
				<View style={styles.imageContainer}>
					<TouchableOpacity onPress={() => navigation.navigate('Login')}>
						<Image
							style={styles.image}
							source={{
								uri:
									'https://scontent.fkhi5-1.fna.fbcdn.net/v/t1.6435-9/117404560_1024876241307837_6502610113058452664_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_eui2=AeGJO2mRJLbngG3D6z89dZJxT9gAEFtoaq9P2AAQW2hqr4zvQrE433jyRwg2bI6Y4IDRW58OG47G5uVPvhY5X5HT&_nc_ohc=-H-hruH9tnEAX9mClCx&_nc_ht=scontent.fkhi5-1.fna&oh=051490430bb9ecc455eda332648f778b&oe=60A701D7'
							}}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.avatarText}>
					<Text style={{ fontWeight: 'bold', fontSize: 24 }}>Hunny Khan</Text>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<View
							style={{
								width: 8,
								height: 8,
								borderRadius: 4,
								backgroundColor: '#34CE51',
								marginTop: '2%'
							}}
						></View>
						<Text style={{ fontSize: 12, marginTop: '2%', paddingLeft: '1%' }}>Active State</Text>
					</View>
				</View>
			</View>
			<View style={styles.listContainer}>
				<View style={styles.list}>
					<View style={styles.listLeft}>
						<View style={styles.icon}>
							<FontAwesome name="user" size={24} color="#9B9DB1" />
						</View>
						<Text style={styles.listLeftText}>Edit Profile</Text>
					</View>
					<View style={styles.listRight}>
						<FontAwesome name="caret-right" size={24} color="#9B9DB1" />
					</View>
				</View>
				<View style={styles.list}>
					<View style={styles.listLeft}>
						<View style={styles.icon}>
							<Ionicons name="ios-location-sharp" size={24} color="#9B9DB1" />
						</View>
						<Text style={styles.listLeftText}>Shopping Address</Text>
					</View>
					<View style={styles.listRight}>
						<FontAwesome name="caret-right" size={24} color="#9B9DB1" />
					</View>
				</View>
				<View style={styles.list}>
					<View style={styles.listLeft}>
						<View style={styles.icon}>
							<Ionicons name="heart" size={24} color="#9B9DB1" />
						</View>
						<Text style={styles.listLeftText}>WishList</Text>
					</View>
					<View style={styles.listRight}>
						<FontAwesome name="caret-right" size={24} color="#9B9DB1" />
					</View>
				</View>
				<View style={styles.list}>
					<View style={styles.listLeft}>
						<View style={styles.icon}>
							<Entypo name="clipboard" size={24} color="#9B9DB1" />
						</View>
						<Text style={styles.listLeftText}>Order History</Text>
					</View>
					<View style={styles.listRight}>
						<FontAwesome name="caret-right" size={24} color="#9B9DB1" />
					</View>
				</View>
				<View style={styles.list}>
					<View style={styles.listLeft}>
						<View style={styles.icon}>
							<Ionicons name="notifications" size={24} color="#9B9DB1" />
						</View>
						<Text style={styles.listLeftText}>Notification</Text>
					</View>
					<View style={styles.listRight}>
						<FontAwesome name="caret-right" size={24} color="#9B9DB1" />
					</View>
				</View>
				<View style={styles.list}>
					<View style={styles.listLeft}>
						<View style={styles.icon}>
							<Ionicons name="ios-settings" size={24} color="#9B9DB1" />
						</View>
						<Text style={styles.listLeftText}>Setting</Text>
					</View>
					<View style={styles.listRight}>
						<FontAwesome name="caret-right" size={24} color="#9B9DB1" />
					</View>
				</View>
			</View>
		</View>
	);
};

export default ProfilePage;

const styles = StyleSheet.create({
	container: {
		width: width,
		height: height,
		flex: 1,
		backgroundColor: '#FEFEFE'
	},
	header: {
		marginTop: '13%',
		width: width,
		flexDirection: 'row',
		alignItems: 'center'
	},
	backBtn: {
		padding: 2,
		left: 0,
		borderRadius: 5,
		position: 'absolute',
		zIndex: 10,
		marginLeft: '5%'
	},
	avatarContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: '5%'
	},
	imageContainer: {
		width: 135,
		height: 135,
		borderRadius: 65,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#CAE0E9',
		borderWidth: 0.5
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 60
	},
	avatarText: {
		paddingTop: '5%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	list: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	listContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-around',
		marginTop: '8%',
		backgroundColor: '#FBFBFB',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30
	},
	listLeft: {
		paddingLeft: '5%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	listLeftText: {
		fontSize: 18,
		paddingLeft: '5%'
	},
	listRight: {
		marginRight: '7%'
	},
	icon: {
		width: 30,
		height: 30,
		alignItems: 'center'
	}
});
