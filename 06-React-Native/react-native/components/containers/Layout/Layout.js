import React from 'react';
import { View } from 'react-native';
import styles from '../../../styles';
import Article from '../../presentational/Article/Article';


export default class Layout extends React.Component {
  render() {
    return (
      <View style={styles.backgroundColumn}>
        <Article></Article>
      </View>
    );
  }
}