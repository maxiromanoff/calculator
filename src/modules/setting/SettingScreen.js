import React, {useContext} from 'react';
import {View, StyleSheet, Switch} from 'react-native';
import {Text, Button} from '../../components';
import {Layout} from '../../views';
import {fontSize} from '../../constants';
import Feather from 'react-native-vector-icons/Feather';
import {ThemeContext} from '../../context';
import {hScale, scale, wScale} from '../../utils/resolutions';
import DeviceInfo from 'react-native-device-info';
import routes from '../routes';
import I18n from '../../locale';

const SettingScreen = ({navigation}) => {
  const {
    theme: {color, backgroundColor},
    toggleTheme,
    isDark,
    locale,
    isVi,
    toggleLocale,
  } = useContext(ThemeContext);

  const language = I18n[locale];

  const goBack = () => {
    navigation.goBack();
  };

  const gotoHistoryScreen = () => {
    navigation.navigate(routes.HistoryScreen);
  };

  const handleTheme = () => {
    toggleTheme();
  };

  const handleLocale = () => {
    toggleLocale();
  };

  return (
    <Layout bgColor={backgroundColor}>
      <View style={styles.containter}>
        <View style={[styles.header, {borderBottomColor: color}]}>
          <Button onPress={goBack} style={styles.btnBack}>
            <Feather name="chevron-left" size={22} color={color} />
          </Button>
          <Text style={[styles.setting, {color}]}>{language.setting}</Text>
          <View style={styles.emptyView} />
        </View>
        <View style={styles.appInfo}>
          <View style={styles.appName}>
            <Text style={[styles.title, {color}]}>{language.app_name} : </Text>
            <Text style={[styles.info, {color}]}>
              {DeviceInfo.getApplicationName()}
            </Text>
          </View>
          <View style={styles.appVersion}>
            <Text style={[styles.title, {color}]}>
              {language.app_version} :{' '}
            </Text>
            <Text style={[styles.info, {color}]}>
              {DeviceInfo.getVersion()}
            </Text>
          </View>
        </View>
        <View style={styles.switchContainer}>
          <Text style={[styles.title, {color}]}>
            {language.light_dark_mode} :{' '}
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onChange={handleTheme}
            value={isDark}
          />
        </View>
        <View style={styles.swtichLanguage}>
          <Text style={[styles.title, {color}]}>
            {language.switch_language}
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onChange={handleLocale}
            value={isVi}
          />
        </View>
        <View style={styles.logContainer}>
          <Button style={styles.logBtn} onPress={gotoHistoryScreen}>
            <Text style={[styles.title, {color}]}>
              {language.calculation_log} :{' '}
            </Text>
            <Feather name="chevron-right" size={20} color={color} />
          </Button>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.txtFooter}>{'Copyright © Maxiromanoff'}</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  containter: {
    flex: 1,
  },
  header: {
    marginTop: scale(5),
    marginLeft: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: scale(6),
    borderBottomWidth: scale(0.6),
  },
  btnBack: {
    paddingHorizontal: scale(8),
  },
  emptyView: {
    width: wScale(30),
    height: hScale(10),
  },
  setting: {
    fontSize: fontSize.larger,
  },
  appName: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(15),
    paddingHorizontal: scale(15),
  },
  appVersion: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(15),
    marginBottom: scale(15),
  },
  title: {
    fontSize: fontSize.fontSize16,
    marginRight: scale(8),
  },
  info: {
    fontSize: fontSize.normal,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(15),
    marginBottom: scale(15),
    justifyContent: 'space-between',
  },
  swtichLanguage: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(15),
    marginBottom: scale(15),
    justifyContent: 'space-between',
  },
  logBtn: {
    paddingHorizontal: scale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: {
    marginBottom: scale(30),
    alignItems: 'center',
  },
  txtFooter: {
    fontSize: fontSize.small,
  },
});
export default SettingScreen;
