import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// routes
import routes from './routes';
import HomeScreen from './home';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={routes.HomeScreen}>
      <Stack.Screen name={routes.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppContainer;
