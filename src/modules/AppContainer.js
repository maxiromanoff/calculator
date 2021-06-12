import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// routes
import routes from './routes';
import HomeScreen from './home';
import SettingScreen from './setting';
import HistoryScreen from './history';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName={routes.HomeScreen}
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={routes.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={routes.SettingScreen} component={SettingScreen} />
      <Stack.Screen name={routes.HistoryScreen} component={HistoryScreen} />
    </Stack.Navigator>
  );
};

export default AppContainer;
