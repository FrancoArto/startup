import React, { Component } from 'react';

class Button extends Component {
  render() {
    return(
      <button id={this.props.id}>{this.props.name}</button> );
  }
}

export default Button;