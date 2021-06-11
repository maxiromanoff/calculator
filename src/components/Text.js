import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

const Text = ({children, bold, style, ...rest}) => {
  return (
    <RNText style={[bold ? styles.bold : styles.regular, style]} {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontFamily: 'IndieFlower_Regular',
    fontWeight: '700',
  },
  regular: {
    fontFamily: 'IndieFlower_Regular',
  },
});

export default Text;
