import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class MainScreen extends React.Component {

  render() {
    return (
      <View>
        
      </View>
    );
  }
}

export default createStackNavigator({
  Main: {
    screen: MainScreen
  }  
})