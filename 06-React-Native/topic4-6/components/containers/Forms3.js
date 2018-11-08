import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import styles from '../../styles';
import AppTouchableOpacity from '../presentational/AppTouchableOpacity';
import Post from '../presentational/Post';
import UserInfo from '../presentational/UserInfo';

class Forms3 extends React.Component {

  constructor(props) {
    super(props);
    
    let post = this.props.navigation.getParam('post', 'not found');

    this.state = {
      post: post,
      user: {},
      isLoading: true
    }
  }

  fetchPostUser() {
    let userId = this.state.post.userId.toString();
    return fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        user: responseJson[0],
        isLoading: false
      });
    }, () => {

    })
    .catch((error) => {
      console.error(error);
    }); 
  }

  componentDidMount() {
    this.fetchPostUser(); 
  }

  render() {
    if (this.state.isLoading) {
      return (
        <ActivityIndicator style={styles.activityIndicator} size='large' color='green' />
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.touchableContainer}>
          <Text>Post</Text>
          <AppTouchableOpacity type="primary" value="Finish" onPress={() => this.props.navigation.navigate('Forms')} />
        </View>
        <Post title={this.state.post.title} body={this.state.post.body} disabled />
        <UserInfo user={this.state.user} />
      </View>
    );
  }
}

export default Forms3;