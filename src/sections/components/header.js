import React from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet,
	SafeAreaView
} from 'react-native';

function Header(props) {
	return (
		<View>
		{/* No se rompa con la area de estado de un iphone*/}
			<SafeAreaView>
			{/*poner un padding al view*/}
			<View style={styles.container}>
				{ /*<Text>Este es el Header</Text>*/}
				<Image
				source={require('../../../assets/logo.png')} 
				style={styles.logo}
				/>
				<View style={styles.right}>
				{props.children}
				</View>
				
			</View>
			
			</SafeAreaView>
		</View>
	)

}


const styles = StyleSheet.create({
	logo: {
		width: 80,
		height: 26,
		//Ajustar al contenido del tamaño establecido, por defecto es cover
		resizeMode: 'contain',

	},
	container: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		//backgroundColor: 'red',
		flexDirection: 'row'

	},
	right: {
		//backgroundColor : 'green',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end'


	}
});

export default Header;