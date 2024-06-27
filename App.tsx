import React, {useEffect} from 'react';
import {fetchCurrencyRates} from './src/service/api';
import AppNavigator from './src/navigations/AppNavigator';
import {CurrencyProvider} from './src/contexts/CurrencyContext';
import 'react-native-gesture-handler';

const App = () => {
 
  return (
    <CurrencyProvider>
      <AppNavigator />
    </CurrencyProvider>
  );
};

export default App;
