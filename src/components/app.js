import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import REACT_APP_GOOGLE_API_KEY from '../.././env';
import VideoList from './video_list';
import VideoDetail from './video_detail';


const API_KEY = REACT_APP_GOOGLE_API_KEY;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }; 

    YTSearch({key: API_KEY, term: 'triathlon'}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos });
    });


  }


  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
