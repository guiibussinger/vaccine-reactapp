import React from 'react';
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';

import StackNavigator from './src/routes';

const AppContainer = createAppContainer(StackNavigator);

const App = () => <AppContainer />;

export default App;
