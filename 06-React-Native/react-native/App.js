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
          <Text style={{
            fontFamily: 'monospace',
            fontWeight: 'normal',
            fontSize: 32,
            color: 'white'
          }}>
            This is a text
            <Text style={{
              color: 'black'
            }}> element
            </Text>
          </Text>

        </View>
        <View
          style={{
            flexDirection: 'row',
            width: 300,
            height: 60,
            padding: 12,
            backgroundColor: 'yellow'
          }}>
          <Text style={{
            fontFamily: 'Roboto',
            fontWeight: '600',
            fontSize: 18
          }}>
            This is a text element
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width:200,
            height: 300,
            padding: 12,
            backgroundColor: 'blue'
          }}>
          <Text style={{
            fontFamily: 'sans-serif',
            fontWeight: '300',
            fontSize: 40,
            color: 'white'
          }}>
            This is a text element
          </Text>
        </View>
      </ScrollView>
    );
  }
}
