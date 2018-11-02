import React, { Component } from 'react';

class TableRow extends Component {   
  
  render() {
    
    return(
      <tr>
        <td>{this.props.movie.title}</td>
        <td>{this.props.movie.year}</td>
        <td>{this.props.movie.duration}min.</td>
      </tr>  
    )   
  }
}

export default TableRow;