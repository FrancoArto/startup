import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../../styles';


export default class AppTouchableOpacity extends React.Component {

  render() {
    return (
      <TouchableOpacity style={[styles.appTouchableOpacity, this.props.type === 'primary' ? styles.primaryTouchableOpacity : styles.secondaryTouchableOpacity]} disabled={this.props.disabled ? true : false}>
        <Text style={this.props.type === 'primary' && styles.textPrimaryTouchableOpacity}>{this.props.value}</Text>
      </TouchableOpacity>
    );
  }
}