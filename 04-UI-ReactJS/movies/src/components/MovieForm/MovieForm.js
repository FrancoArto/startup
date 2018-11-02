import React, { Component } from 'react';
import Input from '../Input/Input.js'
import Button from '../Button/Button.js';
import Movie from '../../model/movie.js';

class MovieForm extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      movieTitle : '',
      movieYear : '',
      movieDuration : ''
    }           

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMovieTitleChange = this.handleMovieTitleChange.bind(this);
    this.handleMovieYearChange = this.handleMovieYearChange.bind(this);
    this.handleMovieDurationChange = this.handleMovieDurationChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.movie !== prevProps.movie) {
      let editableMovie = localStorage.getItem(this.props.movie);
      var movie = JSON.parse(editableMovie);
      console.log(movie);
      this.setState({
        movieTitle : movie.title
      });
      this.setState({
        movieYear : movie.year
      });
      this.setState({
        movieDuration : movie.duration
      });
    }
  }
  
  handleSubmit(event) {
    if (!this.props.movie) {
      let movie = new Movie(this.state.movieTitle, this.state.movieYear, this.state.movieDuration); //Using local state to submit the new movie
      var lastKey = parseInt(localStorage.key(0));
      if (isNaN(lastKey))
      {
        lastKey = 0;
      }
      var x = lastKey + 1; //Setting next item's ID.
      localStorage.setItem(x, JSON.stringify(movie)); //Inserting the new movie into localstorage
    }
    else {
      let movie = new Movie(this.state.movieTitle, this.state.movieYear, this.state.movieDuration);
      localStorage.setItem(this.props.movie, JSON.stringify(movie));
    }
  }

  handleMovieTitleChange(value) {    
    this.setState({ movieTitle : value });
  }

  handleMovieYearChange(value) {    
    this.setState({ movieYear : value });
  }

  handleMovieDurationChange(value) {    
    this.setState({ movieDuration : value });
  }

  render() {
    const movieTitle = 'movieTitle';
    const movieYear = 'movieYear';
    const movieDuration = 'movieDuration';
    const year = new Date().getFullYear();
    var name;
    if (!this.props.movie) {
      name = 'Add';
    }
    else {
      name = 'Modify';
    }
    return(
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>{name} Movie</legend>
          <p>
            <label>Movie Title: </label>
            <Input name={movieTitle} value={this.state.movieTitle} onInputChange={this.handleMovieTitleChange} type="text" />                    
          </p>
          
          <p>
            <label>Movie Year: </label>
            <Input name={movieYear} value={this.state.movieYear} onInputChange={this.handleMovieYearChange} type="number" min="1870" max={year} />
            <br></br>
          </p>
          
          <p>
            <label>Movie Duration: </label>
            <Input name={movieDuration} value={this.state.movieDuration} onInputChange={this.handleMovieDurationChange} type="number" min="1" max="500" />
            <br></br>
          </p>
          <p>
            <Button type="submit" name={name} />
          </p>
        </fieldset>  
      </form> 
    )   
  }
}

export default MovieForm;