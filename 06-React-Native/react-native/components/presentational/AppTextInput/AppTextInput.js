import React from 'react';
import { TextInput } from 'react-native-gesture-handler';


export default class AppTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChangeText = this.handleOnChangeText.bind(this);
  }

  handleOnChangeText() {
    this.props.onChangeText();
  }

  render() {
    return (
      <TextInput style={this.props.style} secureTextEntry={this.props.type === 'password' ? true : false} placeholder="Insert text here!" onChangeText={this.handleOnChangeText} value={this.props.value} />        
    );
  }
}