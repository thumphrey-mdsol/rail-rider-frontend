import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';


export default function Login() {
    const [favorites, setFavorites] = useState([])
    
    // const useEffect 
    
    const renderFavorites = () => {
    
    }
    
    return (
    
    <ScrollView>
      {renderFavorites}
    </ScrollView>

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
  