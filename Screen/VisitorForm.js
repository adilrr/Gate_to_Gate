import React, { useState } from "react";
import { View, Text } from "react-native";
import { ScrollView,TouchableOpacity, TextInput  } from 'react-native';
import { styles } from '../Component/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';



function VisitorDetailsForm({navigation,route}) {
  const [visitorName, setVisitorName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [residentName, setResidentName] = useState("");
  const [residentApartment, setResidentApartment] = useState("");
  const [contact, setContact] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");


  
  const {userId} = route.params;

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
    <ScrollView vertical={true}
    contentContainerStyle={{ paddingBottom: 100, paddingTop : '2%' }}
     style={styles.containerscrollview}>

      <Text style={styles.inputtitle}>
      Add Details for the visitor and notify Resident
      </Text>

       <Text style={styles.inputtitle}>Visitor Name</Text>
      <TextInput
        label="Visitor Name"
        placeholder="Visitor Name"
        value={visitorName}
        onChangeText={setVisitorName}
        style={styles.inputfield}
        mode="outlined"
      />
       <Text style={styles.inputtitle}>Purpose</Text>
      <TextInput
        label="Purpose"
        placeholder="Purpose"
        value={purpose}
        onChangeText={setPurpose}
        style={styles.inputfield}
        mode="outlined"
      />
       <Text style={styles.inputtitle}>Resident Name</Text>
      <TextInput
        label="Resident Name"
        placeholder="Resident Name"
        value={residentName}
        onChangeText={setResidentName}
        style={styles.inputfield}
        mode="outlined"
      />
       <Text style={styles.inputtitle}>Resident Apartment</Text>
      <TextInput
        label="Resident Apartment"
        placeholder="Resident Apartment"
        value={residentApartment}
        onChangeText={setResidentApartment}
        style={styles.inputfield}
        mode="outlined"
      />
       <Text style={styles.inputtitle}>Contact</Text>
      <TextInput
        label="Contact"
        placeholder="Contact"
        value={contact}
        onChangeText={setContact}
        style={styles.inputfield}
        mode="outlined"
        keyboardType="phone-pad"
      />
       <Text style={styles.inputtitle}>Vehicle Type</Text>
      <TextInput
        label="Vehicle Type"
        placeholder="Vehicle Type"
        value={vehicleType}
        onChangeText={setVehicleType}
        style={styles.inputfield}
        mode="outlined"
      />
       <Text style={styles.inputtitle}>Vehicle Number</Text>
      <TextInput
        label="Vehicle Number"
        placeholder="Vehicle Number"
        value={vehicleNumber}
        onChangeText={setVehicleNumber}
        style={styles.inputfield}
        mode="outlined"
      />

      <TouchableOpacity 
           style={styles.signInUpButton}
           onPress={() =>navigation.navigate('ProfileScreen',{userId:userId}) }
          >
          <Text style={styles.signInUpText}>Notify Resident</Text>
       </TouchableOpacity>
    </ScrollView>
  );
}


export default VisitorDetailsForm;
