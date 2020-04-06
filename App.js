import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AppNavigator from './src/navigator/AppNavigator';

export default function App() {
  return (
      <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    
  },
  StatusBar: {
    backgroundColor: "blue",
  }
});
