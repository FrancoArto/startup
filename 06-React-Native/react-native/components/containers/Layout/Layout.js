import React from 'react';
import { View } from 'react-native';
import styles from '../../../styles';
import Article from '../../presentational/Article/Article';


export default class Layout extends React.Component {
  render() {
    return (
      <View style={styles.backgroundColumn}>
        <Article title="This is the title of the article" author="Franco Arto" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur."></Article>
      </View>
    );
  }
}