import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    if ((this.props.name === 'Edit') || (this.props.name === 'Delete')) {
      let obj = {
        id : event.target.id,
        name : event.target.name
      }
      this.props.onClick(obj);
    }
  }

  render() {
    return(
      <button onClick={this.handleOnClick} id={this.props.id} name={this.props.name} >{this.props.name}</button> );
  }
}

export default Button;