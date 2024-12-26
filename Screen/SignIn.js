import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { styles } from '../Component/Styles';

function SignIn({ navigation,route }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    Alert.alert('Login', `Email: ${email}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.apptitle, { paddingTop: '5%' }]}>G2G</Text>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.signInRegisterText}>
      Enter Your Details to SignIn or Register
      </Text>

      <Text style={styles.inputtitle}>username</Text>
      <View style= {{alignItems:'center',justifyContent:'center'}}>
      <TextInput
        style={styles.inputfield}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      </View>
      <Text style={styles.inputtitle}>password</Text>
      <View style= {{alignItems:'center',justifyContent:'center'}}>
      <TextInput
        style={styles.inputfield}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      </View>

      <View style = {{padding:'5%'}}>
     <TouchableOpacity style={
      styles.signInUpButton} 
      onPress={()=> navigation.navigate('EnterCode')}>
        <Text style={styles.signInUpText}>Sign In</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>
      <View style = {{padding:'5%'}}>
      <TouchableOpacity 
      style={styles.registerButton}
       onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.registerText}>Register With Us</Text>
      </TouchableOpacity>
      </View>


    </View>
  );
}

export default SignIn;