import React, {FormEvent, useState} from 'react';
import './Locale.css';
import {COMMON_LOCALES} from "./locales";
import {COMMON_CURRENCIES} from "./currencies";


function Locale() {
  const [number, setNumber] = useState(1234.56);
  const [locale, setLocale] = useState('en-US');
  const [currency, setCurrency] = useState('USD');

  function handleNumberChange(event: FormEvent) {
    const target: any = event.target;
    setNumber(target.value);
  }

  function handleLocaleChange(event: FormEvent) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    setLocale(target.value);
  }

  function handleLocaleSelectChange(event: FormEvent) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    setLocale(target.value);
  }

  function handleCurrencyChange(event: FormEvent) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    setCurrency(target.value);
  }

  function handleCurrencySelectChange(event: FormEvent) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    setCurrency(target.value);
  }

  function formatNumber() {
    try {
      return new Intl.NumberFormat(locale).format(number);
    } catch (error) {
      return error.message;
    }
  }

  function formatCurrency() {
    try {
      return new Intl.NumberFormat(locale, {style: 'currency', currency: currency}).format(number);
    } catch (error) {
      return error.message;
    }
  }

  const renderOption = (option: string) => (<option>{option}</option>);

  return (
    <div className="util">
    <div className="card">
      <div className="title">Number Format Checker</div>
      <table>
        <tr>
          <td>Common Locales</td>
          <td>
            <select value={locale} onChange={handleLocaleSelectChange}>
              {
                COMMON_LOCALES.map(renderOption)
              }
            </select>
          </td>
        </tr>
        <tr>
          <td>Custom Locale</td>
          <td><input type="text" value={locale} onChange={handleLocaleChange}/></td>
        </tr>
        <tr>
          <td>Number to format</td>
          <td><input type="number" value={number} onChange={handleNumberChange}/></td>
        </tr>
        <tr className="result"><td>Format Result</td><td>{formatNumber()}</td></tr>
        <tr>
          <td>Common Currencies</td>
          <td>
            <select value={currency} onChange={handleCurrencySelectChange}>
              {
                COMMON_CURRENCIES.map(renderOption)
              }
            </select>
          </td>
        </tr>
        <tr>
          <td>Custom Currency</td>
          <td><input type="text" value={currency} onChange={handleCurrencyChange}/></td>
        </tr>
        <tr className="result"><td>Currency Result</td><td>{formatCurrency()}</td></tr>
      </table>
    </div>
    <div className="card">
      <div className="title">How It Works</div>
      <div>Uses the Intl.NumberFormat API (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat">link</a>)</div>
      <br/>
      <div>Format Number:</div>
      <code>Intl.NumberFormat('{locale}').format('{number}')</code>
      <div>Format Currency:</div>
      <code>Intl.NumberFormat('{locale}', &#123;style: 'currency', currency: '{currency}'&#125;).format('{number}')</code>
    </div>
    </div>
  );
}

export default Locale;
