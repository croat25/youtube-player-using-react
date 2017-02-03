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
			
			<div className="searchbar">
			<input  
				
				value = {this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div> 
			
			);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onsearchtermchange(term);
	}

	
}

export default SearchBar;

