import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={{
        flex: 1
        }} horizontal= {true}>
        <View
          style={{
            flexDirection: 'row',
            width: 400,
            height: 1000,
            padding: 12,
            backgroundColor: 'red'
          }}>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: 300,
            height: 60,
            padding: 12,
            backgroundColor: 'yellow'
          }}>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width:200,
            height: 300,
            padding: 12,
            backgroundColor: 'blue'
          }}>
        </View>
      </ScrollView>
    );
  }
}
