import React, {Component} from 'react';
import {
	FlatList,
	Text
} from 'react-native';
import Layout from '../components/suggestion-list-layout';
class SuggestionList extends Component {
	render() {
		const list = [
			{
				title: 'Titulo',
				key: '1'
			},
			{
				title: 'Otro Titulo',
				key: '2'
			}

		]
		return(
			<Layout title='Recomendado para ti'>
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
			</Layout>
			)
	}
}


export default SuggestionList;