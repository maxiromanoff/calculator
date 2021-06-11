import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';
import Button from './Button';
import {colors, fontSize} from '../constants';
import Feather from 'react-native-vector-icons/Feather';
import {hScale, scale, wScale} from '../utils/resolutions';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Keyboard = ({onChange}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button style={styles.cell} onPress={() => onChange('AC')}>
          <Text style={styles.ACTxt}>AC</Text>
        </Button>
        <Button style={styles.cell} onPress={() => onChange('-')}>
          <Text style={styles.txtFirstRow}>+/-</Text>
        </Button>
        <Button style={styles.cell} onPress={() => onChange('percent')}>
          <Feather name="percent" size={18} color={colors.green} />
        </Button>
        <Button style={styles.cell} onPress={() => onChange('/')}>
          <Feather name="divide" size={20} color={colors.pink} />
        </Button>
      </View>
      <View style={styles.row}>
        <Button style={styles.cell} onPress={() => onChange('7')}>
          <Text style={styles.number}>7</Text>
        </Button>
        <Button style={styles.cell} onPress={() => onChange('8')}>
          <Text style={styles.number}>8</Text>
        </Button>
        <Button style={styles.cell} onPress={() => onChange('9')}>
          <Text style={styles.number}>9</Text>
        </Button>
        <Button style={styles.cell} onPress={() => onChange('*')}>
          <Feather name="x" size={19} color={colors.pink} />
        </Button>
      </View>
      <View style={styles.row}>
        <Button style={styles.cell} onPress={() => onChange('4')}>
          <Text style={styles.number}>4</Text>
        </Button>
        <Button style={styles.cell} onPress={() => onChange('5')}>
          <Text style={styles.number}>5</Text>
        </Button>
        <Button style={styles.cell} onPress={() => onChange('6')}>
          <Text style={styles.number}>6</Text>
        </Button>
        <Button style={styles.cell} onPress={() => onChange('-')}>
          <Feather name="minus" size={19} color={colors.pink} />
        </Button>
      </View>
      <View style={styles.row}>
        <Button style={styles.cell} onPress={() => onChange('1')}>
          <Text style={styles.number}>1</Text>
        </Button>
        <Button style={styles.cell} onPress={() => onChange('2')}>
          <Text style={styles.number}>2</Text>
        </Button>
        <Button style={styles.cell} onPress={() => onChange('3')}>
          <Text style={styles.number}>3</Text>
        </Button>
        <Button style={styles.cell} onPress={() => onChange('+')}>
          <Feather name="plus" size={19} color={colors.pink} />
        </Button>
      </View>
      <View style={styles.row}>
        <Button style={styles.cell} onPress={() => onChange('delete')}>
          <Ionicons name="refresh-outline" size={19} color={colors.black} />
        </Button>
        <Button style={styles.cell} onPress={() => onChange('0')}>
          <Text style={styles.number}>0</Text>
        </Button>
        <Button style={styles.cell} onPress={() => onChange('.')}>
          <Text style={styles.number}>.</Text>
        </Button>
        <Button style={styles.cell} onPress={() => onChange('=')}>
          <MCIcon name="equal" size={19} color={colors.pink} />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(15),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: scale(10),
  },
  cell: {
    backgroundColor: colors.system_white_2,
    borderRadius: scale(10),
    width: wScale(60),
    height: hScale(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ACTxt: {
    color: colors.green,
    fontSize: fontSize.normal,
  },
  txtFirstRow: {
    color: colors.green,
    fontSize: fontSize.large,
  },
  number: {
    fontSize: fontSize.large,
  },
});

export default Keyboard;
