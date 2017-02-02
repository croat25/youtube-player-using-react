import React,{Component} from 'react';


// const SearchBar = () => {

// 	return <input />;
// };
// class name extends all of reacts components u can use 
class SearchBar extends Component{

	constructor(props){
		super(props);

		this.state={term:''};
	}
	//render a page
	render(){
		return (
			<div> 
			<input  onChange={event=>this.setState({term:event.target.value})} />
			Value of the input: {this.state.term}
			</div> 
			);
	}

	
}

export default SearchBar;

