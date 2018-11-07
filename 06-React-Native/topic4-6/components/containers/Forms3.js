import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles';
import AppTouchableOpacity from '../presentational/AppTouchableOpacity';

class Forms3 extends React.Component {

  render() {
    return (
      <View style={styles.touchableContainer}>
        <Text>Forms 3</Text>
        <AppTouchableOpacity type="primary" value="Finish" onPress={() => this.props.navigation.navigate('Forms')} />
      </View>
    );
  }
}

export default Forms3;