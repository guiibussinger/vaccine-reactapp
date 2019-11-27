import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from './screens/HomeScreen';

const StackHome = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const DrawerNavigation = createDrawerNavigator(
  {
    Home: {
      screen: StackHome
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default DrawerNavigation;
