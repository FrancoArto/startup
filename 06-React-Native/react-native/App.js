import React from 'react';
import { Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 12,
            backgroundColor: 'red'
          }}>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            padding: 12,
            backgroundColor: 'yellow'
          }}>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 300,
            padding: 12,
            backgroundColor: 'blue'
          }}>
        </View>
      </View>
    );
  }
}
