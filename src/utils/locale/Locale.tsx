import React, {FormEvent, useState} from 'react';
import './Locale.css';
import {COMMON_LOCALES} from "./locales";
import SelectBox from '../../shared/SelectBox';
import { COMMON_CURRENCIES } from './currencies';
import TextField from "../../shared/TextField";
import CodeSample from "../../shared/CodeSample";
import NumberField from "../../shared/NumberField";
import Output from "../../shared/Output";


function Locale() {
  const [number, setNumber] = useState(1234.56);
  const [locale, setLocale] = useState('en-US');
  const [currency, setCurrency] = useState('USD');
  const [reverseText, setReverseText] = useState('1,234.56');
  const [reverseLocales, setReverseLocales] = useState('');
  const [reverseLocales2, setReverseLocales2] = useState('');
  const [thousandSeparator, setThousandSeparator] = useState(',');
  const [decimalSymbol, setDecimalSymbol] = useState('.');

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

  function reverseLocale() {
    const matches = COMMON_LOCALES.filter((locale: string) => {
      try {
        const result = new Intl.NumberFormat(locale).format(number);
        return result === reverseText;
      } catch {}
    });
    setReverseLocales(matches.join(', ') || 'No Results');
  }

  function reverseLocaleBySymbols() {
    const matches = COMMON_LOCALES.filter((locale: string) => {
      try {
        const result = new Intl.NumberFormat(locale).format(1234.56);
        if (result.length === 8) {
          return result[1] === thousandSeparator && result[5] === decimalSymbol;
        } else if (result.length === 7) {
          return false;
        }
      } catch {}
    });
    setReverseLocales2(matches.join(', ') || 'No Results');
  }

  return (
      <div className="card">
        <div className="title">Format Number</div>
        <div className="row">
          <SelectBox label="Common Locales" value={locale} onChange={setLocale} options={COMMON_LOCALES}></SelectBox>
          <TextField label="Custom Locale" value={locale} onChange={setLocale}></TextField>
          <NumberField label="Number to format" value={number} onChange={setNumber}></NumberField>
        </div>
        <Output value={formatNumber()}></Output>
        <CodeSample value="Intl.NumberFormat('{locale}').format('{number}');"></CodeSample>

        <div className="title">Format Currency</div>
        <div className="row">
          <SelectBox label="Common Currencies" value={currency} onChange={setCurrency} options={COMMON_CURRENCIES}></SelectBox>
          <TextField label="Custom Currency" value={currency} onChange={setCurrency}></TextField>
        </div>
        <Output value={formatCurrency()}></Output>
        <CodeSample value="Intl.NumberFormat('{locale}', &#123;style: 'currency', currency: '{currency}'&#125;).format('{number}');"></CodeSample>

        <div className="title">Determine Locales from Format</div>
        <div className="row">
          <TextField label="Formatted Value" value={reverseText} onChange={setReverseText} onEnter={reverseLocale}></TextField>
          <button onClick={reverseLocale}>Find Locales</button>
        </div>
        <Output value={reverseLocales}></Output>

        <div className="title">Determine Locales from Settings</div>
        <div className="row">
          <SelectBox label="Thousand Separator" value={thousandSeparator} onChange={setThousandSeparator} options={[',', '.', ' ', '`']}></SelectBox>
          <SelectBox label="Decimal Symbol" value={decimalSymbol} onChange={setDecimalSymbol} options={['.', ',']}></SelectBox>
          <button onClick={reverseLocaleBySymbols}>Find Locales</button>
        </div>
        <Output value={reverseLocales2}></Output>

        <div className="title">More Information</div>
        <p>
          Uses the Intl.NumberFormat API
        </p>
        <p>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat</a>
        </p>
      </div>
  );
}

export default Locale;
