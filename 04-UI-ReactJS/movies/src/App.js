import React, { Component } from 'react';
import './App.css';
import MovieForm from './components/MovieForm/MovieForm';
import MovieTable from './components/MovieTable/MovieTable';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieToForm : null
    }

    this.onEditClick = this.onEditClick.bind(this);
  }

  onEditClick(event) {
    this.setState({
      movieToForm : event
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App">
          <MovieForm movie={this.state.movieToForm} />
        </div>
        <div className="App">
          <MovieTable onEditClick={this.onEditClick} />
        </div>
      </div>
    );
  }
}

export default App;
