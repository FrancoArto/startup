import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import SecondaryScreen from './SecondaryScreen';
import { Ionicons } from '@expo/vector-icons';


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
  Forms: MainScreen,
  Other: {screen : SecondaryScreen}
}, {
  navigationOptions : ({navigation}) => ({
    tabBarIcon: ({focused, tintColor}) => {
      const { routeName } = navigation.state;
      var iconName;
      if (routeName === 'Forms') {
        iconName = 'ios-list';
      } else if (routeName === 'Other') {
        iconName = 'ios-more';
      }
      return <Ionicons name={iconName} size={20} color={tintColor}/>;
    },
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'grey'
    }
  })
});