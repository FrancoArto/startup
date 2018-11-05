import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../../styles';


export default class Layout extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={[styles.box1, styles.margin]}>

        </View>
        <View style={[styles.box2, styles.margin]}>
          
        </View>
        <View style={[styles.box3, styles.margin]}>
          
        </View>
      </View>
    );
  }
}