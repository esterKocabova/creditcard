import React, { useState } from 'react';
import CreditCardInput from '../CreditCardInput/CreditCardInput';
import './CreditCardForm.css';
const CreditCardForm: React.FC = () => {
  const [name, setName] = useState<string>('Jsem Karta');
  const [number, setNumber] = useState<string>('1234 5678 8765 4321');
  const [expiration, setExpiration] = useState<string>('12/24');
  const [securityCode, setSecurityCode] = useState<string>('245');
  return (
    <div className="payment-container">
      <div className="form">
        <h2>Platební údaje</h2>
        <div className="form-group">
          <label>Jméno</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Číslo karty</label>
          <div className="input-group">
            <CreditCardInput number={number} onChange={setNumber} />
          </div>
        </div>
        <div className="form-group">
          <label>Expirace (mm/yy)</label>
          <input
            type="text"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>CVC</label>
          <input
            type="text"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
          />
        </div>
      </div>
      <div className="card">
        <div className="card-number">{number}</div>
        <div className="card-name">{name}</div>
        <div className="card-expiration">{expiration}</div>
        </div>
    </div>
  );
};
export default CreditCardForm;