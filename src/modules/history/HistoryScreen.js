import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Text, Button} from '../../components';
import {Layout} from '../../views';
import {ThemeContext} from '../../context';
import {Calculator} from '../../database';
import {scale} from '../../utils/resolutions';
import {fontSize} from '../../constants';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';

const HistoryScreen = ({navigation}) => {
  const [log, setLog] = useState(null);
  const {
    theme: {color, backgroundColor},
  } = useContext(ThemeContext);

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
          {moment(item.create_at).format('YYYY/MM/DD hh:mm a')}
        </Text>
      </View>
    );
  };
  return (
    <Layout bgColor={backgroundColor}>
      <View style={[styles.header, {borderBottomColor: color}]}>
        <Button onPress={goBack}>
          <Feather name="chevron-left" size={22} color={color} />
        </Button>
        <Text style={[styles.history, {color}]}>Lịch sử</Text>
        <View />
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
    paddingLeft: scale(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: scale(6),
    borderBottomWidth: scale(0.6),
  },
  history: {
    fontSize: fontSize.larger,
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
