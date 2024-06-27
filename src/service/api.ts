import axios from 'axios';

const API_URL = 'https://v6.exchangerate-api.com/v6/72a8d3948e0450b69774d5e3/latest/';

export const fetchCurrencyRates = async (baseCurrency: string) => {
  try {
    const response = await axios.get(`${API_URL+baseCurrency}`);
    return response.data.conversion_rates;
  } catch (error) {
    // console.error('Failed to fetch currency rates:', error);
    throw error;
  }
};
