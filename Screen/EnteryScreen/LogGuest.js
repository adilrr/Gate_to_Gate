import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation,useRoute } from '@react-navigation/native';


const LogGuest = () => {
    const navigation = useNavigation();
    
      const route = useRoute();
      const {userId} = route.params;
  
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
     <MaterialCommunityIcons name="family-tree" size={20} color="#FFA500" />
     <Text style={styles.title}>Log Guest</Text>
     </View>
      
 <View style = {{padding:'5%'}}>
    <TouchableOpacity style={styles.signInUpButton} onPress={()=>navigation.navigate('GuestRequest',{userId:userId})}>
        <Text style={styles.signInUpText}>Request Guest</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:20,
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
    marginTop:'2%',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  signInUpButton: {
    backgroundColor: '#6c63ff',
    paddingVertical: '4%',
    textAlign : 'center',
    borderRadius: 8,
  },
  signInUpText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LogGuest;