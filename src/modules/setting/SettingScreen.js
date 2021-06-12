import React, {useContext} from 'react';
import {View, StyleSheet, Switch} from 'react-native';
import {Text, Button} from '../../components';
import {Layout} from '../../views';
import {fontSize} from '../../constants';
import Feather from 'react-native-vector-icons/Feather';
import {ThemeContext} from '../../context';
import {scale} from '../../utils/resolutions';
import DeviceInfo from 'react-native-device-info';
import routes from '../routes';

const SettingScreen = ({navigation}) => {
  const {
    theme: {color, backgroundColor},
    toggleTheme,
    isDark,
  } = useContext(ThemeContext);

  const goBack = () => {
    navigation.goBack();
  };

  const gotoHistoryScreen = () => {
    navigation.navigate(routes.HistoryScreen);
  };

  const handleTheme = () => {
    toggleTheme();
  };

  return (
    <Layout bgColor={backgroundColor}>
      <View style={[styles.header, {borderBottomColor: color}]}>
        <Button onPress={goBack}>
          <Feather name="chevron-left" size={22} color={color} />
        </Button>
        <Text style={[styles.setting, {color}]}>Cài đặt</Text>
        <View />
      </View>
      <View style={styles.appInfo}>
        <View style={styles.appName}>
          <Text style={[styles.title, {color}]}>Tên ứng dụng : </Text>
          <Text style={[styles.info, {color}]}>
            {DeviceInfo.getApplicationName()}
          </Text>
        </View>
        <View style={styles.appVersion}>
          <Text style={[styles.title, {color}]}>Phiên bản ứng dụng : </Text>
          <Text style={[styles.info, {color}]}>{DeviceInfo.getVersion()}</Text>
        </View>
      </View>
      <View style={styles.switchContainer}>
        <Text style={[styles.title, {color}]}>Chế độ ngày / đêm : </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onChange={handleTheme}
          value={isDark}
        />
      </View>
      <View style={styles.logContainer}>
        <Button style={styles.logBtn} onPress={gotoHistoryScreen}>
          <Text style={[styles.title, {color}]}>Xem lại lịch sử : </Text>
          <Feather name="chevron-right" size={20} color={color} />
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: scale(5),
    paddingLeft: scale(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: scale(6),
    borderBottomWidth: scale(0.6),
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
  logBtn: {
    paddingHorizontal: scale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default SettingScreen;
