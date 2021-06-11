import React, {useState, useContext} from 'react';
import {View, StyleSheet, Switch} from 'react-native';
import {Text, Keyboard} from '../../components';
import {fontSize} from '../../constants';
import {scale} from '../../utils/resolutions';
import {Layout} from '../../views';
import {ThemeContext} from '../../context';

const HomeScreen = () => {
  const [show, setShow] = useState('');
  const [result, setResult] = useState('');

  const {
    theme: {color, backgroundColor, bgColorKeyboard},
    toggleTheme,
    isDark,
  } = useContext(ThemeContext);

  const onChange = value => {
    if (value === 'AC') {
      setShow('');
      setResult('');
    } else if (value === 'delete') {
      setShow(prev => `${prev}`.substring(0, prev.length - 1));
    } else if (value === 'percent') {
      setShow(prev => parseInt(`${prev}`, 10) * 0.01);
    } else if (value === '=') {
      setShow(prev =>
        `${prev}${value}`.substring(0, `${prev}${value}`.length - 1),
      );
      /* eslint no-eval: 0 */
      setResult(eval(show));
    } else {
      setShow(prev => `${prev}${value}`);
    }
  };

  const handleTheme = () => {
    toggleTheme();
  };

  return (
    <Layout style={styles.layout} bgColor={backgroundColor}>
      <View style={styles.mainContainer}>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onChange={handleTheme}
            value={isDark}
          />
        </View>
        <View style={styles.resultCalculator}>
          <View>
            {show ? (
              <View>
                <Text style={[styles.showCalculator, {color}]}>{show}</Text>
              </View>
            ) : (
              <View>
                <Text style={[styles.showCalculator, {color}]}>0</Text>
              </View>
            )}
          </View>
          <View>
            {result ? (
              <View>
                <Text style={[styles.showResult, {color}]}>{result}</Text>
              </View>
            ) : (
              <View />
            )}
          </View>
        </View>
      </View>
      <View
        style={[styles.keyboardContainer, {backgroundColor: bgColorKeyboard}]}>
        <Keyboard onChange={onChange} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    justifyContent: 'space-between',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  switchContainer: {
    paddingHorizontal: scale(15),
    marginTop: scale(15),
  },
  resultCalculator: {
    alignSelf: 'flex-end',
    paddingHorizontal: scale(15),
    marginBottom: scale(20),
  },
  showCalculator: {
    fontSize: fontSize.big,
  },
  showResult: {
    fontSize: fontSize.bigger,
  },
  keyboardContainer: {
    paddingTop: scale(40),
    borderTopLeftRadius: scale(50),
    borderTopRightRadius: scale(50),
  },
});

export default HomeScreen;
