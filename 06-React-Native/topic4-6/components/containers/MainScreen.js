import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import SecondaryScreen from './CameraScreen';
import { Ionicons } from '@expo/vector-icons';
import Forms2 from './Forms2';
import Forms3 from './Forms3';
import styles from '../../styles';
import AppTouchableOpacity from '../presentational/AppTouchableOpacity';
import CameraScreen from './CameraScreen';
import ShowPictureScreen from './ShowPictureScreen';




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
  Post: Forms3
}); 

const cameraStack = createStackNavigator({
  Camera: CameraScreen,
  ShowPicture: ShowPictureScreen
}); 


export default createBottomTabNavigator ({
  Forms: formsStack,
  Camera: cameraStack
}, {
  navigationOptions : ({navigation}) => ({
    tabBarIcon: ({focused, tintColor}) => {
      const { routeName } = navigation.state;
      var iconName;
      if (routeName === 'Forms') {
        iconName = 'ios-list';
      } else if (routeName === 'Camera') {
        iconName = 'ios-camera';
      }
      return <Ionicons name={iconName} size={20} color={tintColor}/>;
    },
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'grey'
    }
  })
});