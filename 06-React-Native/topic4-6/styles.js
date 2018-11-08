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
    flex: 0.3,
    width: '100%',
    borderWidth: 2,
    marginTop: 40,
    alignSelf: 'flex-start'
  },

  appTouchableOpacity: {
    backgroundColor: 'green',
    flexDirection: 'row',
    flex: 0.5,
    width: '60%',
    borderWidth: 1,
    borderRadius:15,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    marginTop:5
  },

  textPrimaryTouchableOpacity: {
    color: 'white',
    textAlignVertical: 'center'
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
  },

  camera: {
    flex: 1,
    alignContent: 'flex-end',
    flexDirection: 'row'
  },

  takePicture: {
    flexDirection: 'row',
    flex: 1,
    height: '15%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
  },

  cameraText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

export default styles;
