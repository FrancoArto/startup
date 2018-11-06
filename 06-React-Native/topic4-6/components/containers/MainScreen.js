import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import SecondaryScreen from './SecondaryScreen';


class MainScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Main</Text>
      </View>
    );
  }
}


export default createBottomTabNavigator ({
  Main: MainScreen,
  Secondary: {screen : SecondaryScreen}
});