// import module
import React, { Component } from 'react';
import { Alert, ListView, Text, FlatList, View, StyleSheet,TouchableOpacity, TouchableNativeFeedback, ToastAndroid, PermissionsAndroid } from 'react-native';
import { PricingCard, Header, Overlay, SearchBar } from 'react-native-elements';
import RNCamera from 'react-native-camera';

export default class FlatListBasics extends Component {

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  };

  render() {
    let self = this
    return (
      <View style={styles.container}>
        <RNCamera
            ref={(ref) => {
              this.camera = ref
            }}
            style = {styles.preview}
            type={"back"}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
        <TouchableOpacity
            onPress={self.takePicture.bind(this)}
            style = {styles.capture}
        >
            <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});
