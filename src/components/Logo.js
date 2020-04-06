import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

export default function Logo() {
  return (
    
    <View style={styles.container}>
      <Image style={{width:40, height:70}} source={require("../images/RR logo.png")}/>
      <Text style={styles.logo}> Welcome to Rail Rider </Text>
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    logo: {
      marginVertical: 15,
      fontSize: 18,
      color: 'rgba(255, 255, 255, 0.7)'
    },
  });
  