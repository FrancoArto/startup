import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onInputChange(event.target.value);
  }

  render() {
    const value = this.props.value;
    return(
      <input type={this.props.type} value={value} onChange={this.handleChange} name={this.props.name} min={this.props.min} max={this.props.max} /> );
  }
}

export default Input;