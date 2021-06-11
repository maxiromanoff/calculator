import React, {useState} from 'react';
import AppContainer from './src/modules/AppContainer';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeContext} from './src/context';
import {colors} from './src/constants';

const themes = {
  dark: {
    color: colors.white,
    backgroundColor: colors.black,
    bgColorKeyboard: colors.system_dark_1,
    cellBgColor: '#191919',
  },
  light: {
    color: colors.black,
    backgroundColor: colors.white,
    bgColorKeyboard: colors.system_white_1,
    cellBgColor: colors.system_white_2,
  },
};

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  return (
    <ThemeContext.Provider value={{theme: themes[theme], isDark, toggleTheme}}>
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;
