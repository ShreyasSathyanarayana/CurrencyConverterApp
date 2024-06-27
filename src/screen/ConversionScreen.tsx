import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import CustomButton from '../components/CustomButton';
import {width} from '../globals/globalValue';
import FontAwasomeIcon from 'react-native-vector-icons/Entypo';
import ExchangeCard from '../components/ExchangeCard';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import CodeCard from '../components/CodeCard';
import {CurrencyContext} from '../contexts/CurrencyContext';

export const ExchangeContex = createContext({});

const ConversionScreen = () => {
  const {currency, exchangeRates, updateCurrency, error, loading} =
    useContext(CurrencyContext);
  const fromCurrencyActionSheetRef = useRef<ActionSheetRef>(null);
  const toCurrencyActionSheetRef = useRef<ActionSheetRef>(null);
  const [fromCurrency, setFromCurrency] = useState(currency);
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('0');

  useEffect(() => {
    onchangeFromAmount();
  }, [fromAmount]);
  useEffect(() => {
    intialFetchCurrency();
  }, []);

  const intialFetchCurrency = async () => {
    await updateCurrency(fromCurrency);
  };

  const onchangeFromAmount = () => {
    if (fromAmount.length !== 0&& fromAmount!=='0') {
      const tempValue = parseInt(fromAmount) * exchangeRates[toCurrency];
      setToAmount(tempValue.toString());
    } else {
      setFromAmount('0');
      setToAmount('0');
    }
  };

  const onSetFromCurrency = async (text: string) => {
    fromCurrencyActionSheetRef.current?.hide();
    await updateCurrency(text);
    setFromCurrency(text);
  };
  const onSetToCurrency = (text: string) => {
    setToCurrency(text);
    toCurrencyActionSheetRef.current?.hide();
  };

  const data = Object.keys(exchangeRates).map(currency => ({
    currency: currency,
    rate: exchangeRates[currency],
  }));
  const openFromActionSheet = () => {
    fromCurrencyActionSheetRef.current?.show();
  };

  const openToActionSheet = () => {
    toCurrencyActionSheetRef.current?.show();
  };

  if (error) {
    return (
      <Text style={styles.errorText}>
        Error fetching data. Please try again.
      </Text>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} />
      {loading && (
        <ActivityIndicator animating={true} color={'red'} size={'large'} />
      )}
      <Text style={styles.heading}>Currency Exchange</Text>
      <View style={styles.row}>
        <CustomButton
          buttonName={currency}
          onClick={openFromActionSheet}
          containerStyle={{width: width * 0.3, height: 50}}
        />
        <FontAwasomeIcon
          name="cycle"
          size={30}
          style={{
            backgroundColor: 'rgb(64, 83, 247)',
            color: 'white',
            padding: 10,
            borderRadius: 30,
          }}
        />
        <CustomButton
          buttonName={toCurrency}
          onClick={openToActionSheet}
          containerStyle={{width: width * 0.3, height: 50}}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <ExchangeContex.Provider
          value={{
            fromCurrency,
            setFromCurrency,
            toCurrency,
            setToCurrency,
            fromAmount,
            setFromAmount,
            toAmount,
          }}>
          <ExchangeCard />
        </ExchangeContex.Provider>

        <ActionSheet
          containerStyle={{height: 350}}
          ref={fromCurrencyActionSheetRef}>
          <FlatList
            data={data}
            keyExtractor={item => item.currency.toString()}
            renderItem={({item}) => (
              <CodeCard onClick={onSetFromCurrency} code={item.currency} />
            )}
          />
        </ActionSheet>
        <ActionSheet
          containerStyle={{height: 350}}
          ref={toCurrencyActionSheetRef}>
          <FlatList
            data={data}
            keyExtractor={item => item.currency.toString()}
            renderItem={({item}) => (
              <CodeCard onClick={onSetToCurrency} code={item.currency} />
            )}
          />
        </ActionSheet>
      </View>
    </View>
  );
};

export default ConversionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 20,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 30,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});
