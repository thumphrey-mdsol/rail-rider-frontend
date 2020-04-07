import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { NavigationContainer } from '@react-navigation/native';

const AppNavigator = createStackNavigator();

function CollectionStack() {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator>
        <AppNavigator.Screen name="Login" component={Login} />
        <AppNavigator.Screen name="Signup" component={Signup} />
        {/* <AppNavigator.Screen name="ItemContainer" component={ItemContainer} />
      <AppNavigator.Screen name="ItemCard" component={ItemCard} />
      <AppNavigator.Screen name="ItemEdit" component={EditItemCard} />
      <AppNavigator.Screen name="NewItemForm" component={NewItemForm} />
      <AppNavigator.Screen name="NewCollectionForm" component={NewCollectionForm} /> */}
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
}

export default CollectionStack;