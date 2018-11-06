import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../../../styles';
import AppTextInput from '../../presentational/AppTextInput/AppTextInput';
import AppTouchableOpacity from '../../presentational/AppTouchableOpacity/AppTouchableOpacity';

export default class EventScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      text: ''
    }

    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress() {
    this.setState( {
      text: ''
    });
  }

  render() {
    return (
      <View style={styles.backgroundColumn}>
        <TouchableOpacity onPress={this.handleOnPress}>
          <AppTextInput type="password" style={styles.textInput} onChangeText={(text) => {this.setState( { text } )}} value={this.state.text} />
        </TouchableOpacity>

        <View style={styles.touchableContainer}>
          <AppTouchableOpacity type='primary' value='Continue' />
          <AppTouchableOpacity type='secondary' value='Sign Up' />
          <AppTouchableOpacity type='secondary' disabled value='Disabled' />
        </View>
      </View>
    );
  }
}