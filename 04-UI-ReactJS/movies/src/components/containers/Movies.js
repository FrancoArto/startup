import React, { Component } from 'react';
import MovieTable from '../presentationals/MovieTable/MovieTable';
import MovieForm from '../presentationals/MovieForm/MovieForm';
import { connect } from 'react-redux';
import AddMovie from '../../actions/AddMovie';
import EditMovie from '../../actions/EditMovie';
import DeleteMovie from '../../actions/DeleteMovie';

class Movies extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
  }

  handleSubmit(event) {
    if (event.name === 'Add') {      
      this.props.AddMovie(event.movie);
    } 
    else {
      this.props.EditMovie(event.key, event.movie);
    }

  }


  onDeleteClick(event) {
    this.props.DeleteMovie(event);
  }

  onEditClick(event) {
    this.props.GetMovieForEditing(event);
  }

  render() {
    return(
      <div>
        <MovieForm handleSubmit={this.handleSubmit} stateProps={this.props.stateProps} />
        <MovieTable stateProps={this.props.stateProps} onEditClick={this.onEditClick} onDeleteClick={this.onDeleteClick} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stateProps : state
});

const mapDispatchToProps = dispatch => {
  return {
    DeleteMovie: (key) => {dispatch(DeleteMovie(key))},
    AddMovie: (key, movie) => {dispatch(AddMovie(key, movie))},
    GetMovieForEditing: (key) => {dispatch(EditMovie(key))},
    EditMovie: (key, movie) => {dispatch(EditMovie(key, movie))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

