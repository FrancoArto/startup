import React from 'react';
import { Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 12,
          backgroundColor: 'red'
        }}>
        <Text>This is a test text</Text>
      </View>
    );
  }
}
