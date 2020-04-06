import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';

export default function LoginForm() {
  return (
    
    <View style={styles.container}>
        <TextInput 
        style={styles.inputBox} 
        placeholder="Username"
        placeholderTextColor="#ffffff"
        />
        <TextInput 
        style={styles.inputBox}
        secureTextEntry={true} 
        placeholder="Password"
        placeholderTextColor="#ffffff"
        />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#455a64',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 6,
        marginBottom: 7,
        fontSize: 16,
        color: '#ffffff'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    button:{
        width: 100,
        backgroundColor: "#1c313a",
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 6,
    },
  });
  