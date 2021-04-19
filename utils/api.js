const BASE_API = 'https://yts.mx/api/v2/';

class Api {
	//Metodos para API
	// Cada uno de los metodos sera una función asincrona
	// async peticion asincrona
	// awai esperar una peticion
	// Podemos usar AJAX con httprequest
	// o fetch utilizando promesas
	// Template text o Tag Template
	// Decomponer solo key data del json con {}
	async getSuggestions(id) {
		const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
		const { data } = await query.json();
		console.log(data);
		return data.movies;
	} 
}


// Instanciar un objeto para la clase
export default new Api();