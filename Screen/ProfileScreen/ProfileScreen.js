import React, { useState } from 'react';
import { View, Text, Image,  TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../Component/Styles';
import { launchCamera } from 'react-native-image-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import GuardProfile from './GuardProfile';
import ResidentProfile from './ResidentProfile';


function ProfileScreen({route}){
  const {userId} = route.params; // Access passed data
  

  let ProfileComponent;

  if (userId == 'Guard') {
    ProfileComponent = <GuardProfile />; 
  } else {
    ProfileComponent = <ResidentProfile />;
  }


  return (
    <ScrollView  vertical={true}
    contentContainerStyle={{ paddingBottom: 100, paddingTop : '2%' }}
    style={styles.container}>
      
    {ProfileComponent} 

    </ScrollView>
  );
}


export default ProfileScreen;