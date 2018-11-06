import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backgroundRow: {
    backgroundColor: Platform.OS === 'android' ? 'green' :  'grey',
    flex: 1,
    flexDirection: 'row'
  },

  backgroundColumn: {
    backgroundColor: 'white',
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
  },

  article:  {
    flexDirection: 'row',
    borderColor: 'black',
    flex: 0.3,
    borderWidth: 2,
    marginTop: 40
  },

  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 4
  },

  articleAuthor: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 16,
    marginBottom: 4
  },

  textContainer: {
    flexDirection: 'column',
    flex: 0.7
  },

  articleContent: {
    fontSize: 10
  },

  imgContainer: {
    flexDirection: 'column',
    flex: 0.3,
    alignSelf: 'center'
  },

  articleImg: {
    height: 100,
    width: 100,
    margin: 5,
    alignSelf: 'flex-end',
  },

  socialMediaIcon: {
    height: 20,
    width: 20,
    margin: 8,
    alignSelf: 'center'
  },

  iconContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row'
  },

  textInput: {
    height: 50,
    marginTop:50
  },

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
