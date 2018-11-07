import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({  

  touchableContainer:  {
    flexDirection: 'column',
    borderColor: 'black',
    justifyContent: 'flex-start',
    flex: 0.25,
    borderWidth: 2,
    marginTop: 40
  },

  appTouchableOpacity: {
    backgroundColor: 'green',
    flexDirection: 'row',
    flex: 0.2,
    width: '60%',
    borderWidth: 1,
    borderRadius:15,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop:5
  },

  textPrimaryTouchableOpacity: {
    color: 'white'
  },

  secondaryTouchableOpacity: {
    backgroundColor: 'white',    
  }
});

export default styles;
