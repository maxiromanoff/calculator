import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {colors} from '../constants';

const Layout = ({children, bgColor}) => {
  return (
    <View style={[{backgroundColor: bgColor || styles.default}, styles.layout]}>
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
  default: {
    color: colors.white,
  },
});

export default Layout;
