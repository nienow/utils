import React from 'react';
import { COMMON_LOCALES } from '../locales';

const charCodes: { [key: number]: string } = {
  44: 'Comma',
  46: 'Period',
  160: 'No-Break Space',
  1643: 'Arabic Decimal Separator',
  1644: 'Arabic Thousands Separator',
  8217: 'Right Single Quotation Mark',
  8239: 'Narrow No-Break Space',
  0: 'None'
};

function LocaleList() {

  function renderRow(locale: string) {
    let thousand = '';
    let decimal = '';
    try {
      const result = new Intl.NumberFormat(locale).format(1234.56);
      if (result.length === 8) {
        thousand = `${result[1]} (${charCodes[result.charCodeAt(1)]})`;
        decimal = `${result[5]} (${charCodes[result.charCodeAt(5)]})`;
      } else if (result.length === 7) {
        thousand = `(${charCodes[0]})`;
        decimal = `${result[4]} (${charCodes[result.charCodeAt(4)]})`;
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
