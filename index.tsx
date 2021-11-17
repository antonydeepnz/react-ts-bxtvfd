import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { ModalGallery, Select } from './Hello';
import { Modelcard } from './modelCard';

const options = [
  { id: '1', label: 'Грейпфрут' },
  { id: '2', label: 'Лайм' },
  { id: '3', label: 'Кокос' },
  { id: '4', label: 'Манго' },
];

interface AppProps {}
interface AppState {
  name: string;
}

const App = () => {
  const [visible, setVisible] = useState(false);
  const [select, setSelect] = useState<string | number | null>(null);
  console.log(select);
  return (
    <div>
      <Select
        value={select}
        options={options}
        onSelect={(e) => {
          setSelect(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        Click
      </button>
      <ModalGallery
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />
      <Modelcard />
    </div>
  );
};

render(<App />, document.getElementById('root'));
