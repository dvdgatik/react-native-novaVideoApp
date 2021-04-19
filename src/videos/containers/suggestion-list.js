import React, {Component} from 'react';
import {
	FlatList,
	Text
} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
	renderEmpty = () => <Empty text='No hay Sugerencias :('/>;
	itemSeparator = () => <Separator color=''/>;
	renderItem = ({item}) => 
	{
		//Spread operation
		return(
		<Suggestion {...item}/>
		)
	}

	render() {
		const list = [
			{
				title: 'Avengers',
				key: '1'
			},
			{
				title: 'Pokémon',
				key: '2'
			}

		]

		return(
			<Layout title='Recomendado para ti'>
				<FlatList
				data={list}
				ListEmptyComponent={this.renderEmpty}
				ItemSeparatorComponent={this.itemSeparator}
				/*renderItem={({item})=> <Text>{item.title}</Text>}*/
				renderItem = {this.renderItem}
				>
				{/*data: puedes pasarle una lista o un array
					key: id para evitar rerenders  y optimizar gracias a esta propiedad
					renderItem: recibe una función y a su vez esta funcion puede renderizar un componente
					por defecto renderiza toda la lista pero solo puedes recibir el item que esta dentro
					ListEmptyComponent: recibe una funcion y renderiza un componente en dado caso de que esta este vacía
					ItemSeparatorComponent: crea un seperador entre cada elemento
				*/}	
				</FlatList>
			</Layout>
			)
	}
}


export default SuggestionList;