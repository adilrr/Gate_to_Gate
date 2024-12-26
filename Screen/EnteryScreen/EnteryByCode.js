import React, { useState,useRef } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

const EntryByCode = ({ cod, onChange }) => {
  
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef(Array(6).fill(null)); 

  const handleCodeChange = (text, index) => {
    if (text.length === 1 && index < code.length - 1) { 
      // If a digit is entered and it's not the last box
      const newCode = [...code];
      newCode[index] = text; 
      newCode[index + 1] = ''; // Clear the next box initially
      setCode(newCode);

      // Focus on the next input box
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus(); 
      }
    } else {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter the code of the resident to log entry</Text>
      <View style={styles.inputtextcontainer}>
      {code.map((digit, index) => (
        <TextInput 
          key={index} 
          style={styles.inputBox} 
          value={digit} 
          onChangeText={(text) => handleCodeChange(text, index)} 
          keyboardType="numeric" 
          maxLength={1} 
          ref={(ref) => (inputRefs.current[index] = ref)} 
        />
      ))}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log Visitor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width : '90%',
    marginStart : '5%'
  },
  inputtextcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor :'gray',
    padding: 10,
    width: 40, 
    textAlign: 'center', 
  },
  label: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    marginTop : '4%',
    backgroundColor: '#6c63ff',
    paddingVertical: '4%',
    textAlign : 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default EntryByCode;