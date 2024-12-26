import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { initDatabase, insertUser, getUsers } from './RoomDb';

export default function Screen3() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [users, setUsers] = useState([]);

  // Initialize the database
  useEffect(() => {
    const initializeDB = async () => {
      await initDatabase();
      await fetchUsers();
    };

    initializeDB();
  }, []);

  // Fetch all users
  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  // Add a new user
  const handleAddUser = async () => {
    if (name && age) {
      await insertUser(name, parseInt(age));
      await fetchUsers();
      setName('');
      setAge('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SQLite with React Native</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Button title="Add User" onPress={handleAddUser} />

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.userText}>{item.name}</Text>
            <Text style={styles.userText}>Age: {item.age}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  userItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    marginVertical: 5,
    borderRadius: 5,
  },
  userText: {
    fontSize: 16,
  },
});
