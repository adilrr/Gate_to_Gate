import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { styles } from '../Component/Styles';
import auth from '@react-native-firebase/auth';



function SignUp({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedRole, setSelectedRole] = useState('Owner'); // Default to 'Owner'
  const roles = ['Owner', 'Guard', 'Admin'];




  const handleRegister = async () => {
    if (password !== confirmpassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
    }

    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        Alert.alert('Success', `User registered with email: ${userCredential.user.email}`);
    } catch (error) {
        console.error('Registration error:', error);
        Alert.alert('Error', error.message);
    }
};




  return (
    <ScrollView style={styles.container}>
    <Text style={[styles.apptitle, {paddingTop :'20%'}]}>Register</Text>
    <Text style={styles.signInRegisterText}>Enter Your Details to Register</Text>
    <Text style={styles.inputtitle}>Name</Text>
    
    <View style= {{alignItems:'center',justifyContent:'center'}}>
    <TextInput
        style={styles.inputfield}
        placeholder="Name"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
    />
    </View>
    <Text style={styles.inputtitle}>Password</Text>
    <View style= {{alignItems:'center',justifyContent:'center'}}>

    <TextInput
        style={styles.inputfield}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
    />
    </View>
    <Text style={styles.inputtitle}>Confirm Password</Text>
    <View style= {{alignItems:'center',justifyContent:'center'}}>

    <TextInput
        style={styles.inputfield}
        placeholder="Password"
        secureTextEntry
        value={confirmpassword}
        onChangeText={setconfirmPassword}
    />
</View>

    <Text style={styles.inputtitle}>Phone No</Text>
    <View style= {{alignItems:'center',justifyContent:'center'}}>

    <TextInput
        style={styles.inputfield}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
    />
    </View>

    <Text style={styles.inputtitle}>I am</Text>
    <View style={styles.radioGroup}>
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
 <View style = {{padding:'5%'}}>
    <TouchableOpacity style={styles.signInUpButton} onPress={
      () => navigation.navigate('EnterCode',{ userId: selectedRole })}>
        <Text style={styles.signInUpText}>Sign Up</Text>
      </TouchableOpacity>
      </View>

    </ScrollView>
  );
};


export default SignUp;
