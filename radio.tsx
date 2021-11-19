import React, { FC } from 'react';
import cn from 'classnames';

import './radio.css';

interface IProps {
  value: any;
  onClick: () => void;
}

export const Switch: FC<IProps> = ({ value, onClick }) => (
  <div>
    <div
      className={cn('switchContainer', { switchContainerActive: value })}
      onClick={onClick}
    >
      <input type="checkbox" value={value} />
      <div className={cn('switch', { switchActive: value })} />
    </div>
  </div>
);
