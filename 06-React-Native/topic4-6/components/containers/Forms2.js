import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from '../../styles';
import AppTouchableOpacity from '../presentational/AppTouchableOpacity';

import Post from '../presentational/Post';


class Forms2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  fetchPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({posts: responseJson});
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
      
      posts.push(<Post title={element.title} key={element.id} body={element.body} />);
    });

    return (
      <ScrollView style={styles.container}>
        <View style={styles.touchableContainer}>
          <Text>Forms 2</Text>
          <AppTouchableOpacity type="primary" value="Next" onPress={() => this.props.navigation.navigate('Forms3')} />
        </View>
        <View>
          {posts}
        </View>
      </ScrollView>
      
    );
  }
}


export default Forms2;
