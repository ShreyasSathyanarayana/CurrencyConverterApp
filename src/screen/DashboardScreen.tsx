import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {CurrencyContext} from '../contexts/CurrencyContext';
import {GetCountryCurrencyCode} from '../utils/CountryCurrencycode';
import CurrencyCard from '../components/CurrencyCard';
import {height} from '../globals/globalValue';
import SearchBar from '../components/SearchBar';
import BottomNavigation from '../navigations/bottom/BottomNavigation';

const DashboardScreen = () => {
  const {currency, exchangeRates, updateCurrency, error, loading} =
    useContext(CurrencyContext);
  const [search, setSearch] = useState('');
  // console.log('exchange Rates===>', exchangeRates);
  if (!exchangeRates) {
    return <ActivityIndicator animating={true} color={'red'} />;
  }

  const data = Object.keys(exchangeRates).map(currency => ({
    currency: currency,
    rate: exchangeRates[currency],
  }));

  const searchDetails = async () => {
    if (search) {
      await updateCurrency(search);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'rgb(15, 197, 242)'}
        showHideTransition="none"
      />
      <SearchBar
        search={search}
        updateSearchText={setSearch}
        searchDetails={searchDetails}
      />
      {loading && (
        <ActivityIndicator
          animating={true}
          size={'large'}
          color={'white'}
          style={{paddingTop: 50, alignItems: 'center'}}
        />
      )}
      {!error && (
        <FlatList
          data={data}
          contentContainerStyle={{alignItems: 'center', paddingTop: 20}}
          keyExtractor={item => item.currency.toString()}
          renderItem={({item, index}) => (
            <CurrencyCard
              currencyCode={item.currency}
              rate={item.rate}
              country={GetCountryCurrencyCode[item.currency]}
              index={index}
            />
          )}
        />
      )}

      {error && (
        <Text style={styles.errorText}>
          Error fetching data. Please try again.
        </Text>
      )}
      
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(15, 197, 242)',
    paddingTop: 25,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});
