import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const { width, height } = Dimensions.get('window');

const Header = ({ navigation }) => {
	const [user, setUser] = useState(true);
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
				{user && user ? (
					<View style={{ elevation: 2 }}>
						<TouchableOpacity onPress={() => navigation.navigate('Profile', { lastPage: 'Home' })}>
							<Image
								style={styles.image}
								source={{
									uri:
										'https://scontent.fkhi5-1.fna.fbcdn.net/v/t1.6435-9/92598818_923533261442136_400930322293719040_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_eui2=AeHknHpyl3SKFLYHgXOqzsbdnytfsICfqoGfK1-wgJ-qgfTzbp4wNcbRSCyxRBrSVccV0rwxJhmfeIROQok2a4NH&_nc_ohc=uGMpeIDP-zcAX824ib6&_nc_ht=scontent.fkhi5-1.fna&oh=9d834de4c562817f3496bff260334daa&oe=60A5EDEF'
								}}
							/>
						</TouchableOpacity>
					</View>
				) : (
					<TouchableOpacity onPress={() => navigation.navigate('Login')}>
						<View style={styles.rightIcon}>
							<AntDesign name="login" size={24} color="black" />
						</View>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		width: width,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: 30,
		paddingHorizontal: '5%'
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
		backgroundColor: '#faf6f6',
		padding: 8,
		elevation: 2,
		borderRadius: 10
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 25
	}
});
