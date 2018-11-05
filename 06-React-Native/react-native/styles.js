import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backgroundRow: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'space-around'
  },

  backgroundColumn: {
    backgroundColor: Platform.OS === 'android' ? 'green' :  'grey',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  box1: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    alignSelf: 'flex-start'
  },

  box2: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    alignSelf: 'center'
  },

  box3: {
    backgroundColor: 'purple',
    width: 100,
    height: 100,
    alignSelf: 'flex-end'
  }
});

export default styles;
