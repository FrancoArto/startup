import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles';
import AppTouchableOpacity from '../presentational/AppTouchableOpacity';


class Forms2 extends React.Component {

  render() {
    return (
      <View style={styles.touchableContainer}>
        <Text>Forms 2</Text>
        <AppTouchableOpacity type="primary" value="Next" onPress={() => this.props.navigation.navigate('Forms3')} />
      </View>
    );
  }
}

export default Forms2;