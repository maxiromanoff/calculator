import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Text, Button} from '../../components';
import {Layout} from '../../views';
import {ThemeContext} from '../../context';
import {Calculator} from '../../database';
import {scale, wScale, hScale} from '../../utils/resolutions';
import {fontSize} from '../../constants';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';
import I18n from '../../locale';

const HistoryScreen = ({navigation}) => {
  const [log, setLog] = useState(null);
  const {
    locale,
    theme: {color, backgroundColor},
  } = useContext(ThemeContext);

  const language = I18n[locale];

  const fetchCalculator = () => {
    Calculator.onLoaded(() => {
      let calculator = Calculator.filter();
      setLog(calculator._data);
    });
  };

  useEffect(() => {
    fetchCalculator();
  }, []);

  const goBack = () => {
    navigation.goBack();
  };
  const keyExtractor = item => String(item.id);

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text style={[styles.logTxt, {color}]}>
          {item.show}={item.result}
        </Text>
        <Text style={[{color}]}>
          {moment(item.created_at).format('YYYY/MM/DD hh:mm a')}
        </Text>
      </View>
    );
  };
  return (
    <Layout bgColor={backgroundColor}>
      <View style={[styles.header, {borderBottomColor: color}]}>
        <Button onPress={goBack} style={styles.btnBack}>
          <Feather name="chevron-left" size={22} color={color} />
        </Button>
        <Text style={[styles.history, {color}]}>{language.history_screen}</Text>
        <View style={styles.emptyView} />
      </View>
      <FlatList
        data={log}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: scale(5),
    paddingLeft: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: scale(6),
    borderBottomWidth: scale(0.6),
  },
  btnBack: {
    paddingHorizontal: scale(8),
  },
  history: {
    fontSize: fontSize.larger,
  },
  emptyView: {
    width: wScale(30),
    height: hScale(10),
  },
  container: {
    marginTop: scale(15),
    paddingHorizontal: scale(15),
  },
  logTxt: {
    fontSize: fontSize.larger,
  },
});

export default HistoryScreen;
