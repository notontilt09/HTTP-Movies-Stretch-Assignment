import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import MovieCreate from './MovieCreate';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      title: '',
      director: '',
      metascore: 0,
      star1: '',
      star2: '',
      star3: ''
    };
  }

  componentDidMount() {
    // fill me in with an HTTP Request to `localhost:5000/api/movies`
    axios.get('http://localhost:5000/api/movies')
      .then(res => {
        this.setState({
          movies: res.data
        })
      })
      .catch(err => {console.log(err)})
  }

  handleTitleChange = e => {
    this.setState({
      title : e.target.value
    })
  }

  handleDirectorChange = e => {
    this.setState({
      director : e.target.value
    })
  }

  handleMetascoreChange = e => {
    this.setState({
      metascore : e.target.value
    })
  }

  handleStar1Change = e => {
    this.setState({
      star1: e.target.value
    })
  }

  handleStar2Change = e => {
    this.setState({
      star2: e.target.value
    })
  }

  handleStar3Change = e => {
    this.setState({
      star3: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const movies = [...this.state.movies]
    movies.push([{
      title: this.state.title,
      director: this.state.director,
      metascore: this.state.metascore,
      stars: this.state.stars
    }]);
    this.setState({
      movies: movies,
    })
  }

  render() {
    return (
      <div className="movie-list">
        <MovieCreate 
          handleSubmit={this.handleSubmit}
          title={this.state.title}
          director={this.state.director}
          metascore={this.state.metascore}
          star1={this.state.star1}
          star2={this.state.star2}
          star3={this.state.star3}
          handleTitleChange={this.handleTitleChange} 
          handleDirectorChange={this.handleDirectorChange}
          handleMetascoreChange={this.handleMetascoreChange}
          handleStar1Change={this.handleStar1Change}
          handleStar2Change={this.handleStar2Change}
          handleStar3Change={this.handleStar3Change}
        />
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}
