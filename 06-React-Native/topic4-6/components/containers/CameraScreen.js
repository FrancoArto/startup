import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions} from 'expo';
import styles from '../../styles';

class CameraScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back
    }

    this.takePicture = this.takePicture.bind(this);
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  
  takePicture() {
    if (this.camera) {
      this.camera.takePictureAsync()
        .then((image) => {
          this.props.navigation.navigate('ShowPicture', {image: image})
        })
        .catch((error) => {
          console.error(error);
        }); 
    }
  }

  render() {  
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>Access to camera denied</Text>;
    } else {
      return (
        <View style={styles.container}>
          <Camera style={styles.camera} type={this.state.type} ref={ref => { this.camera = ref; }}>
            <TouchableOpacity style={styles.takePicture} onPress={this.takePicture}>
              <Text style={styles.cameraText}>
                Take picture
              </Text>
            </TouchableOpacity>            
          </Camera>
        </View>
      );
    }
  }
}

export default CameraScreen;

    

