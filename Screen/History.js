import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ResidentHistory = () => {
  const [selectedTab, setSelectedTab] = useState('My History'); // State to track the selected tab

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Resident History</Text>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'My History' && styles.selectedTab]}
          onPress={() => setSelectedTab('My History')} // Update the selected tab state
        >
          <Text style={styles.tabText}>My History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Fellow Guards' && styles.selectedTab]}
          onPress={() => setSelectedTab('Fellow Guards')} // Update the selected tab state
        >
          <Text style={styles.tabText}>Fellow Guards</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  backText: {
    fontSize: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedTab: {
    backgroundColor: '#4caf50', // Green background for selected tab
  },
  tabText: {
    fontSize: 16,
  },
});

export default ResidentHistory;
