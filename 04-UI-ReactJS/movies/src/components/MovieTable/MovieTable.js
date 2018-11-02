import React, { Component } from 'react';
import TableRow from './TableRow/TableRow';

class MovieTable extends Component { 
  constructor(props) {
    super(props);
    this.values = [];

    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onEditClick(event) {
    this.props.onEditClick(event);
  }

  onDeleteClick(event) {
    localStorage.removeItem(event);
    window.location.reload();
  }


  componentWillMount() {
    /*Get movies from localStorage, parse them to a movie object 
    * and add a TableRow with each one's data 
    * to the values array that will later be rendered. */
    for (var key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        let obj = localStorage.getItem(key);
        let movie = JSON.parse(obj);
        this.values.push(<TableRow onDeleteClick={this.onDeleteClick} onEditClick={this.onEditClick} key={key} id={key} movie={movie} />);      
      }
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
          <th>Edit</th>
          <th>Delete</th>
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