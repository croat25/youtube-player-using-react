import React from 'react';
import ReactDOM from 'react-dom';

//create a new component 
const App=()=>{
	return	<div>Hi!</div>;
}


//take this compnents generated html and put it on the page



ReactDOM.render(<App />, document.querySelector('.container'));