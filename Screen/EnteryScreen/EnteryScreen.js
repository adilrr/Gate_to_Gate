import React, { useState } from 'react';
import { StyleSheet, View, Text,Image, ScrollView } from 'react-native';
import EntryByCode from './EnteryByCode';
import ManualEntry from './ManualEntery';
import LogGuest from './LogGuest';
import LogRegistry from './LogRegistry';
import SocietyNotice from './SocietyNotice';

const EntryScreen = ({route}) => {
  const [code, setCode] = useState('');
  const [entryType, setEntryType] = useState('Delivery');


  const {userId} = route.params; // Access passed data
  

  let ProfileComponent;

  if (userId == 'Guard') {
    ProfileComponent =(
      <View>
      <EntryByCode code={code} onChange={handleCodeChange} />
      <ManualEntry selectedType={entryType} onChange={handleEntryTypeChange} userId= {userId} />
       <LogRegistry />
      </View>
      ); 
  } else {
    ProfileComponent = (
    <View>
      <SocietyNotice /> 
      <LogGuest/>
    </View>);
  }




  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleEntryTypeChange = (newType) => {
    setEntryType(newType);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection :'row',marginBottom:20}}>
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={{ width: 60, height: 60,borderRadius:40,padding:20 }}
          />
          <View style ={{
            flexDirection:'column',
            marginStart:20,
            alignItems: 'center',
            justifyContent: 'center',
            }}>
          <Text style={styles.heading}>Good Morning</Text>
          <Text>Zaid Zaid</Text>
          </View>
      </View>
      {ProfileComponent}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default EntryScreen;


