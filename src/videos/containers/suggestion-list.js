import React, {Component} from 'react';
import {
	FlatList,
	Text
} from 'react-native';
class SuggestionList extends Component {
	render() {
		const list = [
			{
				title: 'David',
				key: '1'
			},
			{
				title: 'Gatica',
				key: '2'
			}

		]
		return(

			<FlatList
				data={list}
				renderItem={({item})=> <Text>{item.title}</Text>}
			>
			
			{/*data: puedes pasarle una lista o un array
				key: id para evitar rerenders  y optimizar gracias a esta propiedad
				renderItem: recibe una función y a su vez esta funcion puede renderizar un componente
				por defecto renderiza toda la lista pero solo puedes recibir el item que esta dentro
			*/}	
			</FlatList>
			)
	}
}


export default SuggestionList;