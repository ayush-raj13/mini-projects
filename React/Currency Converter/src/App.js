import React, { useState, useEffect } from 'react';
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState('INR');
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(amount);

  useEffect(() => {
    // Fetch exchange rates from an API (You can use a real API here)
    axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
      .then((response) => {
        const rates = response.data.rates;
        setCurrencies(Object.keys(rates));
        setExchangeRate(rates[targetCurrency]);
      })
      .catch((error) => console.error(error));
  }, [baseCurrency, targetCurrency]);

  useEffect(() => {
    setConvertedAmount(amount * exchangeRate);
  }, [amount, exchangeRate]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleBaseCurrencyChange = (e) => {
    setBaseCurrency(e.target.value);
  };

  const handleTargetCurrencyChange = (e) => {
    setTargetCurrency(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <h1>Currency Converter</h1>
  <FormControl style={{ marginBottom: '16px' }}>
    <InputLabel>Base Currency</InputLabel>
    <Select value={baseCurrency} onChange={handleBaseCurrencyChange}>
      {currencies.map((currency) => (
        <MenuItem key={currency} value={currency}>
          {currency}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  <TextField
    label="Amount"
    type="number"
    value={amount}
    onChange={handleAmountChange}
    style={{ marginBottom: '16px' }}
  />
  <FormControl style={{ marginBottom: '16px' }}>
    <InputLabel>Target Currency</InputLabel>
    <Select value={targetCurrency} onChange={handleTargetCurrencyChange}>
      {currencies.map((currency) => (
        <MenuItem key={currency} value={currency}>
          {currency}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  <div>
    <p>{amount} {baseCurrency} is equal to {convertedAmount.toFixed(2)} {targetCurrency}</p>
  </div>
</div>

  );
};

export default CurrencyConverter;
