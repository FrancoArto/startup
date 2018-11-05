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
    flex: 0.5,
    width: 100
  },

  box2: {
    backgroundColor: 'purple',
    width: 100,
    flex: 0.3
  },

  box3: {
    backgroundColor: 'white',
    width: 100,
    flex: 0.2
  }
});

export default styles;
