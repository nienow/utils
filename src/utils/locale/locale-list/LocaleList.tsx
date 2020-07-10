import React from 'react';
import { COMMON_LOCALES } from '../locales';

function LocaleList() {

  function renderRow(locale: string) {
    let thousand = '';
    let decimal = '';
    try {
      const result = new Intl.NumberFormat(locale).format(1234.56);
      if (result.length === 8) {
        thousand = `${result[1]} (${result.charCodeAt(1)})`;
        decimal = `${result[5]} (${result.charCodeAt(5)})`;
      } else if (result.length === 7) {
        decimal = `${result[4]} (${result.charCodeAt(4)})`;
      }
    } catch {
    }

    return <tr>
      <td>{locale}</td>
      <td>{thousand}</td>
      <td>{decimal}</td>
    </tr>;
  }

  return <div className="card">
    <table>
      <tr>
        <th>Locale</th>
        <th>Thousand Separator</th>
        <th>Decimal Symbol</th>
      </tr>
      {COMMON_LOCALES.map(locale => renderRow(locale))}
    </table>
  </div>;
}

export default LocaleList;
