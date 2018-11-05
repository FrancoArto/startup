import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../../styles';


export default class Layout extends React.Component {
  render() {
    return (
      <View style={styles.backgroundRow}>
        <View style={[styles.box1]}>

        </View>
        <View style={[styles.box2]}>
          
        </View>
        <View style={[styles.box3]}>
          
        </View>
      </View>
    );
  }
}