import React, { Component } from 'react';
import TableRow from './TableRow/TableRow';

class MovieTable extends Component { 
  constructor(props) {
    super(props);

    

    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onEditClick(event) {
    this.props.onEditClick(event);
  }

  onDeleteClick(event) {
    this.props.onDeleteClick(event);
  }


  render() {
    var movieRows = [];
    this.props.stateProps.movies.forEach(item => {
      let key = this.props.stateProps.movies.indexOf(item);
      movieRows.push(<TableRow onDeleteClick={this.onDeleteClick} onEditClick={this.onEditClick} key={ key } id={ key } movie={ item } />);      
    });
    
    return (
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
        {movieRows}
      </tbody>

      </table>
    )   
  }
}


export default MovieTable;