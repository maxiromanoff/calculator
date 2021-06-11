import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Keyboard} from '../../components';
import {colors, fontSize} from '../../constants';
import {scale} from '../../utils/resolutions';
import {Layout} from '../../views';

const HomeScreen = () => {
  const [show, setShow] = useState('');
  const [result, setResult] = useState('');

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

  return (
    <Layout style={styles.layout}>
      <View style={styles.mainContainer}>
        <View />
        <View style={styles.resultCalculator}>
          <View>
            {show ? (
              <View>
                <Text style={styles.showCalculator}>{show}</Text>
              </View>
            ) : (
              <View>
                <Text style={styles.showCalculator}>0</Text>
              </View>
            )}
          </View>
          <View>
            {result ? (
              <View>
                <Text style={styles.showResult}>{result}</Text>
              </View>
            ) : (
              <View />
            )}
          </View>
        </View>
      </View>
      <View style={styles.keyboardContainer}>
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
    backgroundColor: colors.system_white_1,
    paddingTop: scale(40),
    borderTopLeftRadius: scale(50),
    borderTopRightRadius: scale(50),
  },
});

export default HomeScreen;
