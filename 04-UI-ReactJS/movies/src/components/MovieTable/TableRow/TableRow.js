import React, { Component } from 'react';
import Button from '../../Button/Button';

class TableRow extends Component {   
  
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    this.props.onEditClick(event);
  }

  render() {
    
    return(
      <tr>
        <td>{this.props.movie.title}</td>
        <td>{this.props.movie.year}</td>
        <td>{this.props.movie.duration}min.</td>
        <td><Button onClick={this.handleOnClick} type="button" id={this.props.id} name="Edit" /></td>
      </tr>  
    )   
  }
}

export default TableRow;