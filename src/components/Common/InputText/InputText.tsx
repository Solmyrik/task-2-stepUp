import { useState } from 'react';

interface InputTextProps {
  value: string | number;
  className?: string;
  nameInput?: string;
}

const InputText: React.FC<InputTextProps> = ({ value, className, nameInput }) => {
  const [inputValue, setInputValue] = useState<string | number>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      name={nameInput}
      className={className}
      type="text"
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default InputText;
