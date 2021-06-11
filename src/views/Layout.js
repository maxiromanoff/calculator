import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {colors} from '../constants';

const Layout = ({children, bgColor, style}) => {
  return (
    <View
      style={[
        {backgroundColor: bgColor || colors.white},
        styles.layout,
        style,
      ]}>
      <StatusBar
        animated
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});

export default Layout;
