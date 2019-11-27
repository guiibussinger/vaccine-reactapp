import React from 'react';
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';

import DrawerNavigation from './src/routes';

const AppContainer = createAppContainer(DrawerNavigation);

const App = () => <AppContainer />;

export default App;
