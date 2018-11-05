import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backgroundRow: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  backgroundColumn: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  box1: {
    backgroundColor: 'red',
    height: 100,
    width: 100

  },

  box2: {
    backgroundColor: 'purple',
    height: 100,
    width: 100
  },

  box3: {
    backgroundColor: 'white',
    height: 100,
    width: 100
  }
});

export default styles;
