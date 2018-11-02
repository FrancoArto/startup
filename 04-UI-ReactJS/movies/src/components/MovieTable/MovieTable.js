import React, { Component } from 'react';
import TableRow from './TableRow/TableRow';

class MovieTable extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      values : []
    }

    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onEditClick(event) {
    this.props.onEditClick(event);
  }

  onDeleteClick(event) {
    localStorage.removeItem(event);
    var arr = [];
    for (var key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        let obj = localStorage.getItem(key);
        let movie = JSON.parse(obj);        
        arr.push(<TableRow onDeleteClick={this.onDeleteClick} onEditClick={this.onEditClick} key={key} id={key} movie={movie} />);      
      }
    }
    this.setState({
      values : arr
    });
  }


  componentWillMount() {
    /*Get movies from localStorage, parse them to a movie object 
    * and add a TableRow with each one's data 
    * to the values array that will later be rendered. */
    var arr = this.state.values.slice();
    for (var key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        let obj = localStorage.getItem(key);
        let movie = JSON.parse(obj);        
        arr.push(<TableRow onDeleteClick={this.onDeleteClick} onEditClick={this.onEditClick} key={key} id={key} movie={movie} />);      
      }
    }
    this.setState({
      values : arr
    });
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
        {this.state.values}
      </tbody>

      </table>
    )   
  }
}

export default MovieTable;