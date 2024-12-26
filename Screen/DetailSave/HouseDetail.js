import React, { useState } from "react";
import { View, Text } from "react-native";
import { ScrollView,TouchableOpacity, TextInput  } from 'react-native';
import { styles } from '../../Component/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';



function HouseDetail() {
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

        <TouchableOpacity onPress={() => console.log('Back button pressed')}>
        <View style={styles.row}>
          <AntDesign name="left" color="#000" size={26} fontWeight = 'bold' />
        <Text style={styles.title}>House Detail</Text>
         </View>
        </TouchableOpacity>

       <Text style={styles.inputtitle}>Society Name</Text>
      <TextInput
        label="Name"
        placeholder="Name"
        value={visitorName}
        onChangeText={setVisitorName}
        style={styles.inputfield}
        mode="outlined"
      />
       <Text style={styles.inputtitle}>Block</Text>
      <TextInput
        label="Contact"
        placeholder="Contact"
        value={contact}
        onChangeText={setContact}
        style={styles.inputfield}
        mode="outlined"
      />
       <Text style={styles.inputtitle}>House Number</Text>
      <TextInput
        label="No.of Guest"
        placeholder="No.of Guest"
        value={guest}
        onChangeText={setguest}
        style={styles.inputfield}
        mode="outlined"
        keyboardType="phone-pad"
      />


      <View style = {{
        width : '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
      }}>

      <TouchableOpacity 
           style={[styles.signInUpButton,{width : '80%',}]}
           onPress={() => {}}
          >
          <Text style={styles.signInUpText}>Continue</Text>
       </TouchableOpacity>
       </View>
    </View>
  );
}


export default HouseDetail;
