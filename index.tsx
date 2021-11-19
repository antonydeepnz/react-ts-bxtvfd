import React, { Component, useState, useRef } from 'react';
import { render } from 'react-dom';
import { ModalGallery, Select } from './Hello';
import { Modelcard } from './modelCard';
import { data, modelMappingData } from './data';

import { DropDown } from './dropdown';

// const options = [
//   { id: '1', label: 'Грейпфрут' },
//   { id: '2', label: 'Лайм' },
//   { id: '3', label: 'Кокос' },
//   { id: '4', label: 'Манго' },
// ];

const drops = [
  { id: 1, text: 'Возрастанию цены' },
  { id: 2, text: 'Убыванию цены' },
  { id: 3, text: 'Возрастанию ежемесячного платежа' },
  { id: 4, text: 'Убыванию ежемесячного платежа' },
  { id: 5, text: 'Алфавиту A-Z' },
  { id: 6, text: 'Алфавиту Z-A' },
  { id: 7, text: 'Релевантности' },
];

console.log(modelMappingData(data));

interface AppProps {}
interface AppState {
  name: string;
}

const App = () => {
  const [visible, setVisible] = useState(false);
  const [select, setSelect] = useState<string | number | null>(null);

  const refArr = useRef([]);

  console.warn('refs', refArr);

  return (
    <div>
      <DropDown options={drops}/>
      {/* <Select
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
      {[1, 2, 3].map((el, idx) => (
        <div
          key={el}
          ref={(ref) => (refArr.current[idx] = ref)}
          onMouseOver={() => {
            if (refArr.current[idx - 1]) {
              refArr.current[idx - 1].className = 'blockRed';
            }
          }}
          onMouseLeave={() => {
            if (refArr.current[idx - 1]) {
              refArr.current[idx - 1].className = 'block';
            }
          }}
          className="block"
        />
      ))} */}
    </div>
  );
};

render(<App />, document.getElementById('root'));
