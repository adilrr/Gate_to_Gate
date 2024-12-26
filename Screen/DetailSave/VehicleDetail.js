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

const VehicleDetail = () => {
  const [houses, setHouses] = useState([
    { id: '1', title: 'Blue Toyota Yaris', license: 'LEA 123' },
    { id: '2', title: 'Black Honda City', license: 'LEA 123' },
  ]);
  const [title, setTitle] = useState('');
  const [license, setLicense] = useState('');

  const addHouse = () => {
    if (title && license) {
      const newHouse = { id: Date.now().toString(), title, license };
      setHouses([...houses, newHouse]);
      setTitle('');
      setLicense('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardLicense}>{item.license}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

    <TouchableOpacity onPress={() => console.log('Back button pressed')}>
        <View style={styles.row}>
           <AntDesign name="left" color="#000" size={26} fontWeight = 'bold' />
           <Text style={styles.title}>House Detail</Text>
        </View>
    </TouchableOpacity>
      <FlatList
        data={houses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.fab} onPress={addHouse}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default VehicleDetail;
