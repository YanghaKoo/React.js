
import _ from 'lodash'
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const API_KEY = "AIzaSyD8n2Uv0Xbzs8xF6hxqh_2OI0PpJfLu37I";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null }; // state에 불려올 5개의 비디오를 넣을거임
    this.videoSearch('')

  }

  videoSearch = (term) => {
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  render() {

    const videoSearch  = _.debounce((term)=> {
      this.videoSearch(term)
    }, 300)

    
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
