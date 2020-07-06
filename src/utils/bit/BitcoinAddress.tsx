import React, { useState } from 'react';
import TextField from '../../shared/TextField';
import Output from '../../shared/Output';

function BitcoinAddress() {
  const [privateKey, setPrivateKey] = useState('');

  // const [address, setAddress] = useState('');
  
  function generateAddress() {
    return privateKey + 'a';
  }

  return <div className="card">
    <div className="title">Generate Address from Private Key</div>
    <div className="row">
      <TextField label="Private Key" value={privateKey} onChange={setPrivateKey}></TextField>
    </div>
    <Output value={generateAddress()}></Output>
  </div>;
}

export default BitcoinAddress;
