import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Assuming you're using Material Icons

const LogRegistry = () => {
  const [entries, setEntries] = useState([
    { name: 'Ali Khan', type: 'Delivery', description: 'Food Delivery for house 23, Block A', approved: true },
    { name: 'Hamza Aslam', type: 'Taxi', description: 'Taxi ride to Airport', approved: false },
  ]);

  const handleApprove = (index) => {
    const updatedEntries = [...entries];
    updatedEntries[index].approved = true;
    setEntries(updatedEntries);
  };

  return (
    <ScrollView style={styles.container}>

     <View style ={{flexDirection :'row',justifyContent:'space-between',paddingHorizontal:'10%',marginTop:10}}>
      <Text style={styles.title}>Log Registry</Text>
   
      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>View All</Text>
        <Icon name="chevron-right" size={20} color="gray" />
      
      </TouchableOpacity>
      </View>
      

      {entries.map((entry, index) => (
        <View key={index} style={styles.entryContainer}>
         <View style ={{flexDirection :'row',justifyContent:'space-between',paddingHorizontal:'10%'}}>

          <Text style={[styles.name,{marginTop:10}]}>{entry.name}</Text>
          <Text style={entry.approved ? styles.approvedText : styles.pendingText}>
              {entry.approved ? 'Approved' : 'Pending'}
            </Text>
            </View>
          <Text style={styles.description}>{entry.description}</Text>
          <View style={styles.statusContainer}>
           
          </View>
          {!entry.approved && (
            <TouchableOpacity onPress={() => handleApprove(index)}>
              <Text style={styles.approveButton}>Approve</Text>
            </TouchableOpacity>
          )}
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
    marginBottom: 10,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  viewAllText: {
    marginRight: 5,
  },
  entryContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 15,
    marginBottom: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: 'gray',
    marginBottom: 10,
    marginStart:'5%'
  },
  statusContainer: {
    backgroundColor: '#eee',
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
  approvedText: {
    color: 'green',
  },
  pendingText: {
    color: 'red',
  },
  approveButton: {
    color: 'blue',
  },
});

export default LogRegistry;