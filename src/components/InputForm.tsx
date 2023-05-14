import { useState } from 'react';
import './InputForm.css';

type Props = {
  addTodo: (title: string) => void;
};

export const InputForm = ({ addTodo }: Props) => {
  const [inputText, setInputText] = useState('');

  const handleClick = () => {
    if (inputText === '') return;
    addTodo(inputText);
  };

  return (
    <div>
      <input
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleClick}>追加</button>
    </div>
  );
};
