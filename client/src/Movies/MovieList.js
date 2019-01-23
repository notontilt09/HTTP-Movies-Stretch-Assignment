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
      metascore: '',
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

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const movies = [{
      title: this.state.title,
      director: this.state.director,
      metascore: this.state.metascore,
      stars: [this.state.star1, this.state.star2, this.state.star3]
    }, ...this.state.movies]
    this.setState({
      movies: movies
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
          handleChange={this.handleChange}
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
