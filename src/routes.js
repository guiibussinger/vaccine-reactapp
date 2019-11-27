import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from './screens/HomeScreen';
import NewVaccineScreen from './screens/NewVaccineScreen';
import DependentsScreen from './screens/DependentsScreen';
import NewDependentScreen from './screens/NewDependentScreen';

const StackHome = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    NewVaccine: {
      screen: NewVaccineScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const StackDependents = createStackNavigator(
  {
    Dependents: {
      screen: DependentsScreen
    },
    NewDependent: {
      screen: NewDependentScreen
    }
  },
  {
    initialRouteName: 'Dependents'
  }
);

const DrawerNavigation = createDrawerNavigator(
  {
    Home: {
      screen: StackHome
    },
    Dependentes: {
      screen: StackDependents
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default DrawerNavigation;
