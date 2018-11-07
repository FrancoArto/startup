import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles';
import AppTouchableOpacity from '../presentational/AppTouchableOpacity';
import Post from '../presentational/Post';

class Forms3 extends React.Component {

  render() {
    const post = this.props.navigation.getParam('post', 'not found');
    return (
      <View style={styles.container}>
        <View style={styles.touchableContainer}>
          <Text>Post</Text>
          <AppTouchableOpacity type="primary" value="Finish" onPress={() => this.props.navigation.navigate('Forms')} />
        </View>
        <Post title={post.title} body={post.body} disabled />
      </View>
    );
  }
}

export default Forms3;