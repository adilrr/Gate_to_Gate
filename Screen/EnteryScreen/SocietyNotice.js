import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const SocietyNotice = () => {
  const [entries, setEntries] = useState([
    {description: 'Food Delivery for house 23, Block A'},
    { description: 'Taxi ride to Airport' },
  ]);

  const handleApprove = (index) => {
    const updatedEntries = [...entries];
    updatedEntries[index].approved = true;
    setEntries(updatedEntries);
  };

  return (
    <ScrollView style={styles.container}>
     <View style ={{flexDirection :'row',alignItems:'center',justifyContent:'center'}}>
     <MaterialCommunityIcons name="bell-ring" size={20} color="#FFA500" />
     <Text style={styles.title}>Society Notice</Text>
     </View>
      

      {entries.map((entry, index) => (
        <View key={index} style={styles.entryContainer}>
          <Text style={styles.description}>{entry.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF9F6',
    borderRadius: 10,
    width : '90%',
    marginStart : '5%',
    paddingBottom : 20,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:'2%',
    marginBottom: 10,
  },
  description: {
    color: 'gray',
    marginBottom: 10,
    marginStart:'5%',
    borderBottomWidth:1
  },
});

export default SocietyNotice;