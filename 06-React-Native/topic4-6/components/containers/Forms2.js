import React from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../../styles';
import AppTouchableOpacity from '../presentational/AppTouchableOpacity';

import Post from '../presentational/Post';


class Forms2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      posts: []
    }
  }

  fetchPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({posts: responseJson,
      isLoading: false});
    }, () => {})
    .catch((error) => {
      console.error(error);
    });  
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    var posts = [];
    this.state.posts.forEach(element => {
      
      posts.push(<Post title={element.title} key={element.id} body={element.body} onPress={() => this.props.navigation.navigate('Post', {post: element})} />);
    });

    if (this.state.isLoading) {
      return (
        <ActivityIndicator style={styles.activityIndicator} size='large' color='green' />
      )
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.touchableContainer}>
          <Text>Posts</Text>
          <AppTouchableOpacity type="primary" value="Next" onPress={() => this.props.navigation.navigate('Post')} />
        </View>
        <View>
          {posts}
        </View>
      </ScrollView>
      
    );
  }
}


export default Forms2;
