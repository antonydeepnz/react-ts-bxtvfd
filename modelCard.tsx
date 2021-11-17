import React, {
  FC,
  useState,
  useMemo,
  Fragment,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import cn from 'classnames';

import { AnotherGallery } from './Hello';

import './modelCard.css';

export const Modelcard: FC<any> = () => {
  return (
    <div className="modelCardWrapper">
      <AnotherGallery />
      <div className="modelCardTitleBlock">
        <h2>520i Business</h2>
        <p>2021 • Новый</p>
        <div className="modelCardCharacteristicsBlock">
          <div className="modelCardCharacteristicsCol">
            <p>Бензин 2.0 л, 156 л.c.</p>
            <p>Автомат</p>
            <p>Полный</p>
          </div>
          <div className="modelCardCharacteristicsCol">
            <p>Чёрный</p>
            <p>75 базовых опций</p>
            <p>4 доп. опции</p>
          </div>
        </div>
        <p>В наличии Москва</p>
      </div>
      <div>
        <h2>4 330 000 ₽</h2>
        <p>от 55 000 ₽ / мес</p>
      </div>
    </div>
  );
};
