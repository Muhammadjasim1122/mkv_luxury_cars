import { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [selectedCurrency, setSelectedCurrency] = useState('AED');

  // Exchange rates (base currency: AED)
  const exchangeRates = {
    AED: 1,      // Base currency
    USD: 0.27,   // 1 AED = 0.27 USD
    EUR: 0.25,   // 1 AED = 0.25 EUR
    GBP: 0.21,   // 1 AED = 0.21 GBP
  };

  const convertPrice = (priceInAED) => {
    const rate = exchangeRates[selectedCurrency] || 1;
    return Math.round(priceInAED * rate);
  };

  const getCurrencySymbol = () => {
    const symbols = {
      AED: 'AED',
      USD: '$',
      EUR: '€',
      GBP: '£',
    };
    return symbols[selectedCurrency] || selectedCurrency;
  };

  return (
    <CurrencyContext.Provider
      value={{
        selectedCurrency,
        setSelectedCurrency,
        convertPrice,
        getCurrencySymbol,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}

