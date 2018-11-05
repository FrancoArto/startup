import React from 'react';
import { Text, View, Image } from 'react-native';
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
          <Image source={require('./assets/img1.jpg')}/>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: 300,
            height: 60,
            padding: 12,
            backgroundColor: 'yellow'
          }}>

          <Image style={{
            height: 80,
            width: 100
          }} source={{uri: 'https://cdn.airplane-pictures.net/images/uploaded-images/2018/10/26/1126893s.jpg'}}/>
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
