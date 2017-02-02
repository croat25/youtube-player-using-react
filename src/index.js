import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/videolist';
const API_KEY = 'AIzaSyDI4zxofaNuf5wNpap6ZUgdvYsRooLYBfQ';






//create a new component 
class App extends Component{
	constructor (props){
		super(props);

		this.state={ videos:[] };

		YTSearch({key:API_KEY, term:'surfboards'},(videos) => {
			this.setState({videos});
	});
	}
				///videos is considered a prop so thats why when u 

	render(){
	return	(
		<div>
			<SearchBar />
			
			<VideoList videos={this.state.videos} />
	</div>
	);}
}


//take this compnents generated html and put it on the page



ReactDOM.render(<App />, document.querySelector('.container'));
