import React from 'react';
import './LocaleSymbol.scss';

interface LocaleSymbolProps {
  code: number;
  desc: string;
  type: 'decimal' | 'thousand';
}

function LocaleSymbol(props: LocaleSymbolProps) {

  function getSymbol() {
    return String.fromCharCode(props.code);
  }

  function getExample() {
    return props.type === 'decimal' ? `1${getSymbol()}0` : `1${getSymbol()}000`;
  }

  return <div className="locale-symbol-card">
    <span className="locale-symbol-card__symbol">{getSymbol()}</span>
    <div className="locale-symbol-card__example">{getExample()}</div>
    <div className="locale-symbol-card__desc">{props.desc}</div>
  </div>;
}

export default LocaleSymbol;
