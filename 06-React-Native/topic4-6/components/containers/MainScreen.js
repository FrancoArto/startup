import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import SecondaryScreen from './SecondaryScreen';
import { Ionicons } from '@expo/vector-icons';
import Forms2 from './Forms2';
import Forms3 from './Forms3';
import styles from '../../styles';
import AppTouchableOpacity from '../presentational/AppTouchableOpacity';




class MainScreen extends React.Component {

  render() {
    return (
      <View style={styles.touchableContainer}>
        <Text>Main</Text>
        <AppTouchableOpacity type="primary" value="Next" onPress={() => this.props.navigation.navigate('Posts')} />
      </View>
    );
  }
}

const formsStack = createStackNavigator({
  Forms: MainScreen,
  Posts: Forms2,
  Forms3: Forms3
}); 


export default createBottomTabNavigator ({
  Forms: formsStack,
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