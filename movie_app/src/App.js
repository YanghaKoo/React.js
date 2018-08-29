import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {};

  componentDidMount() {
    this._getMovies();
  }
 
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      //console.log(movie)
      return (
        <Movie
          title={movie.title_english}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies: movies
    });
  };

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")   //이 url에 json파일이 있을 경우에 아래처럼 따라하면 json으로 얻을 수 있음
      .then(response => {     
        return response.json();
      })
      .then(json => {
        return json.data.movies;
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className={this.state.movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : "loading"}
      </div>
    );
  }
}

export default App;
