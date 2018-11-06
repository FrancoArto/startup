import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../../../styles';
import AppTextInput from '../../presentational/AppTextInput/AppTextInput';

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
      <View style={styles.backgroundRow}>
        <TouchableOpacity onPress={this.handleOnPress}>
          <AppTextInput type="password" style={styles.textInput} onChangeText={(text) => {this.setState( { text } )}} value={this.state.text} />
        </TouchableOpacity>
      </View>
    );
  }
}