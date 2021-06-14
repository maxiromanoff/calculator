import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Keyboard, Button} from '../../components';
import {fontSize} from '../../constants';
import {scale} from '../../utils/resolutions';
import {Layout} from '../../views';
import Feather from 'react-native-vector-icons/Feather';
import routes from '../routes';
import {ThemeContext} from '../../context';
import {Calculator} from '../../database';
import RNBootSplash from 'react-native-bootsplash';
import formatString from '../../utils/formatString';

const HomeScreen = ({navigation}) => {
  const [show, setShow] = useState('');
  const [result, setResult] = useState('');

  const gotoMenu = () => {
    navigation.navigate(routes.SettingScreen);
  };

  const {
    theme: {color, backgroundColor, bgColorKeyboard},
  } = useContext(ThemeContext);

  const onChange = value => {
    if (show.substr(show.length - 1) === '=') {
      setShow(formatString(String(result)));
      setResult('');
    }
    if (value === 'AC') {
      setShow('');
      setResult('');
    } else if (value === 'delete') {
      setShow(prev => `${prev}`.substring(0, prev.length - 1));
    } else if (value === 'percent') {
      setShow(prev => `${parseInt(prev, 10) * 0.01}`);
    } else if (value === '=') {
      setShow(prev => `${prev}${value}`);
      /* eslint no-eval: 0 */
      setResult(String(eval(show)));

      Calculator.insert({
        show: show.replace('=', ''),
        result: String(eval(show)),
        created_at: new Date(),
      });
    } else {
      setShow(prev => `${prev}${value}`);
    }
  };

  useEffect(() => {
    RNBootSplash.hide();
  }, []);
  return (
    <Layout style={styles.layout} bgColor={backgroundColor}>
      <View style={styles.mainContainer}>
        <Button style={styles.menuContainer} onPress={gotoMenu}>
          <Feather name="menu" size={25} color={color} />
        </Button>
        <View style={styles.resultCalculator}>
          <Text style={[styles.showCalculator, {color}]}>
            {String(show).replace('=', '') || 0}
          </Text>

          {result ? (
            <Text style={[styles.showResult, {color}]}>{result}</Text>
          ) : null}
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
  menuContainer: {
    paddingHorizontal: scale(15),
    marginTop: scale(10),
    alignSelf: 'flex-end',
  },
  resultCalculator: {
    paddingHorizontal: scale(15),
    marginBottom: scale(20),
  },
  showCalculator: {
    textAlign: 'right',
    fontSize: fontSize.big,
  },
  showResult: {
    fontSize: fontSize.bigger,
    textAlign: 'right',
  },
  keyboardContainer: {
    paddingTop: scale(40),
    borderTopLeftRadius: scale(50),
    borderTopRightRadius: scale(50),
  },
});

export default HomeScreen;
