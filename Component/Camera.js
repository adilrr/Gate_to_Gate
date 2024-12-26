import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, Platform, Alert } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const CameraCheck = () => {
  const [photoUri, setPhotoUri] = useState(null);

  const requestCameraPermission = async () => {
    try {
      let result;
      if (Platform.OS === 'android') {
        result = await request(PERMISSIONS.ANDROID.CAMERA);
      } else if (Platform.OS === 'ios') {
        result = await request(PERMISSIONS.IOS.CAMERA);
      }
      return result === RESULTS.GRANTED;
    } catch (error) {
      console.error('Permission error: ', error);
      return false;
    }
  };

  const openCamera = async () => {
    const hasPermission = await requestCameraPermission();

    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Camera access is required to take photos.');
      return;
    }

    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Camera error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setPhotoUri(uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Camera Example with Permissions</Text>
      <Button title="Open Camera" onPress={openCamera} />
      {photoUri && (
        <Image source={{ uri: photoUri }} style={styles.photo} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  photo: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default CameraCheck;
