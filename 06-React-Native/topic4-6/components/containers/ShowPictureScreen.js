import React from 'react';
import { View, Image } from 'react-native';
import styles from '../../styles';
import AppTouchableOpacity from '../presentational/AppTouchableOpacity';

class ShowPictureScreen extends React.Component {

  render() {
    let image = this.props.navigation.getParam('image', 'not found');
    return (
      <View style={styles.container}>
        <Image style={{height: image.height,
        width: image.width}} 
        source={{uri: image.uri}} />
        <View style={styles.touchableContainer}>
        <AppTouchableOpacity type="primary" value="Go back" onPress={() => this.props.navigation.goBack()} />
      </View>       
      </View>
    );
  }
}

export default ShowPictureScreen;