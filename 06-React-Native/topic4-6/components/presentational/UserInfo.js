import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles';



export default class UserInfo extends React.Component {

  render() {
    return (
      <View>
        <Text style={styles.postTitle}>{this.props.user.username}</Text>
        <Text style={styles.postContent}>{this.props.user.name}</Text>
        <Text style={styles.postContent}>{this.props.user.email}</Text>
        <Text style={styles.postContent}>{this.props.user.address.city}</Text>
        <Text style={styles.postContent}>{this.props.user.website}</Text>
      </View>
    );
  }
}