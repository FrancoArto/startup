import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles';



export default class Post extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.postTitle}>{this.props.title}</Text>
        <Text style={styles.postContent}>{this.props.body}</Text>
      </View>
    );
  }
}