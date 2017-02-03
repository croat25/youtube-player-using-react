
import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/videolist';
import VideoPlayer from './components/videoplayer';
const API_KEY = 'AIzaSyDI4zxofaNuf5wNpap6ZUgdvYsRooLYBfQ';






//create a new component 
class App extends Component{
	constructor (props){
		super(props);

		this.state={ 
			videos:[],
			selectedVideo:null
			 };
			this.videosearch('surfboards');
			}
		videosearch(term){
			YTSearch({key:API_KEY, term:term},(videos) => {
			this.setState({
				videos:videos,
				selectedVideo:videos[0]
			});
	});
		}		///videos is considered a prop so thats why when u 

	render(){
	
const videosearch = _.debounce((term) => {this.videosearch(term) },300);
	return	(

		

		<div>
			<SearchBar onsearchtermchange={videosearch} />
			<VideoPlayer video={this.state.selectedVideo} />
			<VideoList 
			onVideoSelect={selectedVideo=>this.setState({selectedVideo}) }
			videos={this.state.videos} />
	</div>
	);}
}


//take this compnents generated html and put it on the page



ReactDOM.render(<App />, document.querySelector('.container'));
