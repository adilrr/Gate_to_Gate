import React, { useState } from 'react';
import { View, Text, Image,  TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../Component/Styles';
import { launchCamera } from 'react-native-image-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation,useRoute } from '@react-navigation/native';



function ResidentProfile(){

  
  const navigation = useNavigation();
  const route = useRoute();
  const {userId} = route.params;

  const [passcodeVisible, setPasscodeVisible] = useState(false);
  
    const [photoUri, setPhotoUri] = useState(null);

  const togglePasscodeVisibility = () => {
    setPasscodeVisible(!passcodeVisible);
  };

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
    <ScrollView  vertical={true}
    contentContainerStyle={{ paddingBottom: 100, paddingTop : '5%' }}
    style={styles.container}>

        <View style = {{
            flexDirection : 'row',
             paddingStart:20,
              alignItems : 'center',
              marginStart : '10%'
              }}>

            
      <TouchableOpacity onPress={openCamera}>
      <View>
        {photoUri ? (
          <Image source={{ uri: photoUri }} style={styles.photo} />
        ) : (
          <Image
            source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={{ width: 60, height: 60 ,borderRadius : 20}}
          />
        )}
      </View>
    </TouchableOpacity>
      <View style={styles.userInfoContainer}>
        <Text style={styles.name}>Zaid Zahid</Text>
        <Text style={styles.textprofile}>Owner</Text>
        <Text style={styles.textprofile}>Address</Text>
      </View>
      </View>

      <View style={styles.passcodeContainer}>
        <Text style={styles.apptitle}>Your PASSCODE</Text>
        <TouchableOpacity onPress={togglePasscodeVisibility}>
          <Text style={styles.title}>{passcodeVisible ? '1224234' : '••••••••'}</Text>
        </TouchableOpacity>
        <Text style={styles.passcodeWarning}>
          Do not share this passcode with anyone. Doing such will cause a security breach.
        </Text>
      </View>

    <View style={styles.card}>
      <TouchableOpacity onPress={()=> navigation.navigate('ProfileScreen',{userId:userId})}>
      <View style = {styles.menuItem}>  
      <MaterialCommunityIcons name="home-heart" color="#088F8F" size={26} fontWeight = 'bold' />
        <Text style={[styles.menuItemText,{fontWeight:'bold',fontSize : 18}]}>My Houses</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style = {styles.menuItem}> 
      <MaterialCommunityIcons name="car-back" color="#FFA500" size={26} fontWeight = 'bold' />
        <Text style={[styles.menuItemText,{fontWeight:'bold',fontSize : 18}]}>My Vehicles</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style = {styles.menuItem}>
      <MaterialCommunityIcons name="family-tree" color="#FF5733" size={26} fontWeight = 'bold' />
        <Text style={[styles.menuItemText,{fontWeight:'bold',fontSize : 18}]}>Family Members</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity>
      <View style = {styles.menuItem}>
      <AntDesign name="exclamationcircleo" color="#FF5733" size={26} fontWeight = 'bold' />
        <Text style={[styles.menuItemText,{fontWeight:'bold',fontSize : 18}]}>Details</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity >
      <View style= {styles.menuItem}>
      <MaterialIcons name="settings" color="#808080" size={26} fontWeight = 'bold' />
        <Text style={[styles.menuItemText,{fontWeight:'bold',fontSize : 18}]}>Settings</Text>
        </View>
      </TouchableOpacity>

    </View>

    
    </ScrollView>
  );
}


export default ResidentProfile;