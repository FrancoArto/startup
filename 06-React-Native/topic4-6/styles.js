import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  touchableContainer:  {
    flexDirection: 'column',
    borderColor: 'black',
    justifyContent: 'flex-start',
    flex: 0.25,
    width: '100%',
    borderWidth: 2,
    marginTop: 40,
    alignSelf: 'flex-start'
  },

  appTouchableOpacity: {
    backgroundColor: 'green',
    flexDirection: 'row',
    flex: 0.25,
    width: '60%',
    borderWidth: 1,
    borderRadius:15,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    marginTop:5
  },

  textPrimaryTouchableOpacity: {
    color: 'white'
  },

  secondaryTouchableOpacity: {
    backgroundColor: 'white',    
  },

  postTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop:10,
    marginBottom: 5
  },

  postContent: {
    fontSize: 10
  },

  activityIndicator: {
    alignSelf: 'center',
    flex: 1
  }
});

export default styles;
