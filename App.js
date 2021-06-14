import React, {useState, useEffect} from 'react';
import AppContainer from './src/modules/AppContainer';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';

import {ThemeContext} from './src/context';
import {colors} from './src/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [theme, setTheme] = useState(null);
  const [locale, setLocale] = useState(null);

  const toggleTheme = () => {
    let newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    AsyncStorage.setItem('@theme', newTheme);
  };

  const isDark = theme === 'dark';

  const toggleLocale = () => {
    let newLocale = locale === 'en' ? 'vi' : 'en';
    setLocale(newLocale);
    AsyncStorage.setItem('@locale', newLocale);
  };

  const isVi = locale === 'vi';

  const fetchInit = async () => {
    let localeLocal = await AsyncStorage.getItem('@locale');
    let themeLocal = await AsyncStorage.getItem('@theme');
    setTheme(themeLocal || 'light');
    setLocale(localeLocal || 'vi');
  };

  useEffect(() => {
    fetchInit();
  }, []);

  if (!theme || !locale) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: themes[theme],
        isDark,
        toggleTheme,
        locale,
        isVi,
        toggleLocale,
      }}>
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;
