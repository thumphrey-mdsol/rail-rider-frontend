import { createStackNavigator } from 'react-navigation';
import Login from '../screens/Login';

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
});

export default AppNavigator;