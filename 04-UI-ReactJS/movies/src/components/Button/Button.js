import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    if ((this.props.name === 'Edit') || (this.props.name === 'Delete')) {
      this.props.onClick(event.target.id);
    }
  }

  render() {
    return(
      <button onClick={this.handleOnClick} id={this.props.id}>{this.props.name}</button> );
  }
}

export default Button;