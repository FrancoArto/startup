import React, { Component } from 'react';
import TableRow from './TableRow/TableRow';

class MovieTable extends Component { 
  constructor(props) {
    super(props);
    this.values = [];
  }

  componentWillMount() {
    let x = localStorage.length + 1;

    /*Get all movies from localStorage, parse them to a movie object 
    * and add a TableRow with each one's data 
    * to the values array that will later be rendered. */
    while (x>1) {
      x--;
      let obj = localStorage.getItem(x);
      let movie = JSON.parse(obj);
      this.values.push(<TableRow key={x} id={x} movie={movie} />);
    }
  }

  render() {
    return(
      <table>
        <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {this.values}
      </tbody>

      </table>
    )   
  }
}

export default MovieTable;