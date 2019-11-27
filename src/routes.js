import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';

const StackNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    initialRouteName: 'Home'
  }
);

export default StackNavigator;
