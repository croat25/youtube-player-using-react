import React from 'react';
import ReactDOM from 'react-dom';
//AIzaSyDI4zxofaNuf5wNpap6ZUgdvYsRooLYBfQ
import SearchBar from './components/searchbar';
const API_KEY = 'AIzaSyDI4zxofaNuf5wNpap6ZUgdvYsRooLYBfQ';
//create a new component 
const App=()=>{
	return	(
		<div>
			<SearchBar />
	</div>
	);
}


//take this compnents generated html and put it on the page



ReactDOM.render(<App />, document.querySelector('.container'));
