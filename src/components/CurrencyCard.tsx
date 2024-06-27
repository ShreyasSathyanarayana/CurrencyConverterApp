import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {height, width} from '../globals/globalValue';
type currencyProps = {
  currencyCode: string;
  rate: number;
  country: string;
  index: number;
};
const CurrencyCard = ({currencyCode, rate, country, index}: currencyProps) => {
  return (
    <View style={styles.card}>
      <Text
        style={[
          {width: width * 0.13, textAlign: 'center'},
          index % 4 == 0
            ? {color: 'green'}
            : index % 2 == 0
            ? {color: 'red'}
            : {color: 'blue'},
        ]}>
        {currencyCode}
      </Text>
      <Text
        numberOfLines={2}
        style={{
          width: width * 0.6,
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'black',
        }}>
        {country}
      </Text>
      <Text
        numberOfLines={1}
        style={[
          {width: width * 0.2},
          index % 4 == 0
            ? {color: 'green'}
            : index % 2 == 0
            ? {color: 'red'}
            : {color: 'blue'},
        ]}>
        {rate}
      </Text>
    </View>
  );
};

export default CurrencyCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgb(215, 252, 251)',
    width: width * 0.96,
    elevation: 5,
    marginBottom: 10,
    height: height * 0.1,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
