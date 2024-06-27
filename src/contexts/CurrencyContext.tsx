// context/CurrencyContext.js
import React, {createContext, useEffect, useState} from 'react';
import {fetchCurrencyRates} from '../service/api';

// Create a Context
export const CurrencyContext = createContext({});

// Create a Provider component
export const CurrencyProvider = ({children}) => {
  const [currency, setCurrency] = useState('INR'); // Default currency
  const [exchangeRates, setExchangeRates] = useState({}); // To store exchange rates
  const [loading, setLoading] = useState(false); // to store loading
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCurrency();
  }, [currency]);
  // Function to update the currency
  const updateCurrency = (newCurrency: string) => {
    setCurrency(newCurrency.toUpperCase());
  };

  const fetchCurrency = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetchCurrencyRates(currency.toUpperCase());
      setExchangeRates(response);
    } catch (error) {
      setError(error.message || 'Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <CurrencyContext.Provider
      value={{currency, exchangeRates, updateCurrency, error, loading}}>
      {children}
    </CurrencyContext.Provider>
  );
};
