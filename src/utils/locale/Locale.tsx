import React, {FormEvent, useState} from 'react';
import './Locale.css';
import {COMMON_LOCALES} from "./locales";
import SelectBox from '../../shared/SelectBox';
import { COMMON_CURRENCIES } from './currencies';


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

  function handleCurrencyChange(event: FormEvent) {
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

  return (
      <div className="util">
        <div className="card">
          <div className="title">Format Number</div>
          <div className="row">
            <div className="col field"><SelectBox label="Common Locales" value={locale} onChange={setLocale} options={COMMON_LOCALES}></SelectBox></div>
            <div className="col field">
              <label>Custom Locale</label>
              <input type="text" value={locale} onChange={handleLocaleChange}/>
            </div>
            <div className="col field">
              <label>Number to format</label>
              <input type="number" value={number} onChange={handleNumberChange}/>
            </div>
          </div>
          <label>Result</label>
          <div className="result">{formatNumber()}</div>
          <label>Code</label>
          <code>Intl.NumberFormat('{locale}').format('{number}');</code>

          <div className="title">Format Currency</div>
          <div className="row">
            <div className="col field"><SelectBox label="Common Currencies" value={currency} onChange={setCurrency} options={COMMON_CURRENCIES}></SelectBox></div>
            <div className="col field">
              <label>Custom Currency</label>
              <input type="text" value={currency} onChange={handleCurrencyChange}/>
            </div>
          </div>
          <label>Result</label>
          <div className="result">{formatCurrency()}</div>
          <label>Code</label>
          <code>Intl.NumberFormat('{locale}', &#123;style: 'currency', currency: '{currency}'&#125;).format('{number}');</code>
          <div className="title">More Information</div>
          <p>
            Uses the Intl.NumberFormat API
          </p>
          <p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat</a>
          </p>

          {/*<div className="title">Code</div>*/}
          {/*<code>*/}
          {/*  Intl.NumberFormat('{locale}').format('{number}');*/}
          {/*  Intl.NumberFormat('{locale}', &#123;style: 'currency', currency: '{currency}'&#125;).format('{number}');*/}
          {/*</code>*/}
        </div>
      </div>
  );
}

export default Locale;
