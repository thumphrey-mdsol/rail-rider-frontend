import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';


export default function Login(props) {
  return (
    
    <View style={styles.container}>
      <Logo />
      <LoginForm />
      <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <Text style={styles.signupButton} onPress={()=> props.navigation.push('Signup', {name: 'tom'})}> Signup </Text>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#455a64',
      alignItems: 'center',
      justifyContent: 'center',
    },
    signupTextContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginBottom: 30,
      flexDirection: 'row'
    },
    signupText: {
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: 16,
    },
    signupButton: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '500'
    },
  });
  