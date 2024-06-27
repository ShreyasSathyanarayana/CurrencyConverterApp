import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {width} from '../globals/globalValue';
import InputAmount from './InputAmount';
import {ExchangeContex} from '../screen/ConversionScreen';
import {CurrencyContext} from '../contexts/CurrencyContext';

type ExchangeProps = {
  fromCurrency: string;
  toCurrency: string;
  fromAmount: number;
  toAmount: number;
  setFromAmount: (num: number) => void;
  setToAmount: (num: number) => void;
};

const ExchangeCard = () => {
  const {
    toCurrency,
    fromAmount,
    setFromAmount,
    toAmount,
  } = useContext(ExchangeContex);

  const {currency, exchangeRates} = useContext(CurrencyContext);
  return (
    <View style={styles.card}>
      <Text style={styles.cardHeading}>
        <Text style={{color: 'red'}}>{currency}</Text> |{' '}
        <Text style={{color: 'blue'}}>{toCurrency}</Text>
      </Text>
      <View style={{alignItems: 'center'}}>
        <InputAmount value={fromAmount} handleChange={setFromAmount} />
        <Text style={{marginTop: 10}}>
          ~ 1{currency} = ~ {exchangeRates[toCurrency]} {toCurrency}{' '}
        </Text>
        <View
          style={{
            width: width * 0.82,
            backgroundColor: 'rgb(225, 225, 230)',
            height: 40,
            borderRadius:25,
            marginVertical:20,
            justifyContent:'center',
            paddingStart:15
          }}>
            <Text>{toAmount}</Text>
          </View>
      </View>
    </View>
  );
};

export default ExchangeCard;

const styles = StyleSheet.create({
  card: {
    width: width * 0.93,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 15,
    padding: 10,
  },
  cardHeading: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    paddingBottom: 30,
  },
});
