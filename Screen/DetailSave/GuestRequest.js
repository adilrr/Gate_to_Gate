import React, { useState } from "react";
import { View, Text } from "react-native";
import { ScrollView,TouchableOpacity, TextInput  } from 'react-native';
import { styles } from '../../Component/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';



function GuestRequest({navigation,route}) {
  const {userId} = route.params;

  const [visitorName, setVisitorName] = useState("");
  const [contact, setContact] = useState("");
  const [guest, setguest] = useState("");
  const [selectedRole, setSelectedRole] = useState('Today'); // Default to 'Owner'


  const roles = ['Today', 'Tomorrow'];

  const handleNotifyResident = () => {
    console.log("Notify Resident button pressed");
    console.log({
      visitorName,
      purpose,
      residentName,
      residentApartment,
      contact,
      vehicleType,
      vehicleNumber,
    });
  };

  return (
    <View vertical={true}
    contentContainerStyle={{ paddingBottom: 100, paddingTop : '5%' }}
     style={styles.containerscrollview}>

  
       <Text style={styles.inputtitle}>Name</Text>
      <TextInput
        label="Name"
        placeholder="Name"
        value={visitorName}
        onChangeText={setVisitorName}
        style={styles.inputfield}
        mode="outlined"
      />
       <Text style={styles.inputtitle}>Phone No</Text>
      <TextInput
        label="Contact"
        placeholder="Contact"
        value={contact}
        onChangeText={setContact}
        style={styles.inputfield}
        mode="outlined"
        keyboardType="phone-pad"
      />
       <Text style={styles.inputtitle}>No.of Guest</Text>
      <TextInput
        label="No.of Guest"
        placeholder="No.of Guest"
        value={guest}
        onChangeText={setguest}
        style={styles.inputfield}
        mode="outlined"
        keyboardType="phone-pad"
      />


      <View style={[styles.radioGroup,{flexDirection:'row'}]}>
          {roles.map((role, index) => (
           <TouchableOpacity
            key={index}
            style={[styles.radioContainer, { width: '45%', margin: '2.5%' }]} 
        
            onPress={() => setSelectedRole(role)}
           >
            <View style={styles.radioCircle}>
              {selectedRole === role && <View style={styles.radioSelected} />}
            </View>
            <Text style={styles.radioText}>{role}</Text>
           </TouchableOpacity>
          ))}
        
          </View>




      <View style = {{
        width : '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
      }}>

      <TouchableOpacity 
           style={[styles.signInUpButton,{width : '80%',}]}
           onPress={() => navigation.navigate('ProfileScreen',{userId:userId})}
          >
          <Text style={styles.signInUpText}>Request</Text>
       </TouchableOpacity>
       </View>
    </View>
  );
}


export default GuestRequest;
