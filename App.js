import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NavigationContainerWrapper from './Screen/NavigationContainer'

export default function App(){
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainerWrapper/>
    </SafeAreaView>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafd',
  },
});

