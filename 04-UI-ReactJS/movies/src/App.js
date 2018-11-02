import React, { Component } from 'react';
import './App.css';
import MovieForm from './components/MovieForm/MovieForm';
import MovieTable from './components/MovieTable/MovieTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App">
          <MovieForm />
        </div>
        <div className="App">
          <MovieTable />
        </div>
      </div>
    );
  }
}

export default App;
