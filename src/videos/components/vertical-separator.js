import React from 'react';
import {
	Text,
	View,
	StyleSheet
} from 'react-native';



function VerticalSeparator(props) {
	return (
		<View style={[
			styles.separator,
			{
				//Agregando estilos mas dinamicos a un elemento color universal
				borderTopColor: (props.color) ? props.color : '#eaeaea'
			}
			]}>
			{/*<Text>Esto es un Separador</Text>*/}
		</View>
	);
}

const styles = StyleSheet.create({
	separator: {
		borderTopWidth: 1,
	}
});

export default VerticalSeparator;