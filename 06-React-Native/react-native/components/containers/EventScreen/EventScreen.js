import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../../../styles';

export default class EventScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      text: ''
    }
  }


  render() {
    return (
      <View style={styles.backgroundRow}>
        <TextInput style={styles.textInput} placeholder="Insert text here!" onChangeText={(text) => {this.setState( { text } )}} />
      </View>
    );
  }
}