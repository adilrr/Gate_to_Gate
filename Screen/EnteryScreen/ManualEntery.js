import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from '../../Component/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation,useRoute } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const entryTypes = [
  { id: 1, label: 'Delivery' },
  { id: 2, label: 'Taxi' },
  { id: 3, label: 'Guest' },
  { id: 4, label: 'Others'},
];

const ManualEntry = ({ selectedType, onChange }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {userId} = route.params;


  const handleEntryTypePress = (type) => {
    navigation.navigate('VisitorForm',{userId:userId}) 
  };

  const renderRow = (startIndex) => (
    <View style = {{width:'50%', padding :20}}>
      {entryTypes.slice(startIndex, startIndex + 2).map((type) => (
        <TouchableOpacity
          key={type.id}
          style={[styles.option, selectedType === type.label && styles.selectedOption]}
          onPress={() => handleEntryTypePress(type.label)}
        >
        {type.label === 'Delivery' && <MaterialCommunityIcons name="truck-fast-outline" color="#FFA500" size={26} fontWeight="bold" />}
        {type.label === 'Taxi' && <MaterialCommunityIcons name="taxi" color="#FFA500" size={26} fontWeight="bold" />}
        {type.label === 'Guest' && <MaterialCommunityIcons name="family-tree" color="#FFA500" size={26} fontWeight="bold" />}
        {type.label === 'Others' && <AntDesign name="plus" color="#FFA500" size={26} fontWeight="bold" />}
          <Text style={styles.optionLabel}>{type.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
      <View style = {{flex:1}}>
      <Text style = {{marginStart:'5%'}}>Log Visitor Depending on the Type Below</Text>
      <View style={styles.optionsContainer}>
        {renderRow(0)}
        {renderRow(2)}
      </View>
    </View>
  );
};


export default ManualEntry;