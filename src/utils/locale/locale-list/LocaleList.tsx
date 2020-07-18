import React from 'react';
import { COMMON_LOCALES } from '../locales';
import LocaleSymbol from './LocaleSymbol';

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

  // function getCode(char: string) {
  //   return `${char} (${charCodes[char.charCodeAt(0)]})`;
  // }

  function getCode(char?: string) {
    return char ? charCodes[char.charCodeAt(0)] : charCodes[0];
  }

  function renderRow(locale: string) {
    let thousand = '';
    let decimal = '';
    try {
      const result = new Intl.NumberFormat(locale).format(1234.56);
      if (result.length === 8) {
        thousand = getCode(result[1]);
        decimal = getCode(result[5]);
      } else if (result.length === 7) {
        thousand = getCode();
        decimal = getCode(result[4]);
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
    <div className="title">Possible Decimal Symbols</div>
    <div className="row">
      <LocaleSymbol code={44} desc={charCodes[44]} type="decimal"></LocaleSymbol>
      <LocaleSymbol code={46} desc={charCodes[46]} type="decimal"></LocaleSymbol>
      <LocaleSymbol code={1643} desc={charCodes[1643]} type="decimal"></LocaleSymbol>
    </div>

    <div className="title">Possible Thousands Separators</div>
    <div className="row">
      <LocaleSymbol code={44} desc={charCodes[44]} type="thousand"></LocaleSymbol>
      <LocaleSymbol code={46} desc={charCodes[46]} type="thousand"></LocaleSymbol>
      <LocaleSymbol code={160} desc={charCodes[160]} type="thousand"></LocaleSymbol>
      <LocaleSymbol code={8239} desc={charCodes[8239]} type="thousand"></LocaleSymbol>
      <LocaleSymbol code={1644} desc={charCodes[1644]} type="thousand"></LocaleSymbol>
      <LocaleSymbol code={8217} desc={charCodes[8217]} type="thousand"></LocaleSymbol>
    </div>

    <div className="title">All Common Locales</div>
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
