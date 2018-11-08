import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../styles';



export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress() {
    this.props.onPress();
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handleOnPress} disabled={this.props.disabled ? true : false}>
        <Text style={styles.postTitle}>{this.props.title}</Text>
        <Text style={styles.postContent}>{this.props.body}</Text>
      </TouchableOpacity>
    );
  }
}