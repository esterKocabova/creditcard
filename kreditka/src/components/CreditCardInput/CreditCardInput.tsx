import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import './CreditCardInput.css';
interface CreditCardInputProps {
  number: string;
  onChange: (newNumber: string) => void;
}
const CreditCardInput: React.FC<CreditCardInputProps> = ({ number, onChange }) => {
  const [values, setValues] = useState<string[]>(['', '', '', '']);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  // Use useEffect to initialize the values from the number prop
  useEffect(() => {
    const initialValues = number.split(' ');
    setValues(initialValues);
  }, [number]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^[0-9]{0,4}$/.test(value)) {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);
      onChange(newValues.join(' '));
      if (value.length === 4 && index < 3) {
        inputs.current[index + 1]?.focus();
      }
    }
  };
  return (
    <div className="card-number-input">
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          onChange={(e) => handleChange(e, index)}
          ref={(el) => inputs.current[index] = el}
          maxLength={4}
        />
      ))}
    </div>
  );
};
export default CreditCardInput;