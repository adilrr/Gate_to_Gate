import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Attendance = () => {
  const [houses, setHouses] = useState([
    { id: '1', title: 'Mon,Aug,1',hour:'10:00 hrs', time: '8:00 Am - 6:00 pm' },
    { id: '2', title: 'Mon,Aug,1',hour:'10:00 hrs', time: '8:00 Am - 6:00 pm' },
    { id: '3', title: 'Mon,Aug,1',hour:'10:00 hrs', time: '8:00 Am - 6:00 pm' },

  ]);
  const [title, setTitle] = useState('');
  const [hour, sethour] = useState('');
  const [time, settime] = useState('');


  const addHouse = () => {
    if (title && hour && time) {
      const newHouse = { id: Date.now().toString(), title, hour,time };
      setHouses([...houses, newHouse]);
      setTitle('');
      sethour('');
      settime('');
    }
  };

  const renderItem = ({ item }) => (
    <View style = {styles.card}>
    <View style={{
        flexDirection:'row',
    justifyContent: 'space-between',}}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardLicense}>{item.hour}</Text>
    </View>
    <Text style={styles.cardTitle}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

    <TouchableOpacity onPress={() => console.log('Back button pressed')}>
        <View style={styles.row}>
           <AntDesign name="left" color="#000" size={26} fontWeight = 'bold' />
           <Text style={styles.title}>My Attendance</Text>
        </View>
    </TouchableOpacity>
      <FlatList
        data={houses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 80, // To avoid overlapping with FAB
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardLicense: {
    fontSize: 14,
    color: '#6c757d',
  },
  inputContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#6f42c1',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  fabText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    padding : 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
    color: '#333',
  },
});

export default Attendance;
