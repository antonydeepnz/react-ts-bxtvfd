import React, { FC, useMemo, useState } from 'react';
import cn from 'classnames';

import './dropdown.css';

// <div className={'selectWrapper'}>
//   <select className={'dropdownSelect'}>
//     {/* <div className={'dropdownList'}> */}
//     {drops.map(({ id, text }) => (
//       <option value={id} selected={val === id}>
//         {text}
//       </option>
//     ))}
//     {/* </div> */}
//   </select>
// </div>

interface IDropDown {
  options: { id: string | number; text: string }[];
  value: string | number | null;
  onSelect: (value: string | number) => void;
}

export const DropDown: FC<IDropDown> = ({ options, value, onSelect }) => {
  const [showList, setShowList] = useState(false);

  const handleClickDropDown = () => {
    setShowList(true);
  };

  const handleSelect = (id) => {
    onSelect(id);
    setShowList(false);
  };

  const selectedValue = useMemo(() => {
    const selected = options.find(({ id }) => id === value).text;
    return selected[0].toLowerCase() + selected.slice(1);
  }, [value]);

  return (
    <div className={cn('dropdownWrapper')}>
      <div className={cn('dropdownValueWrapper')}>
        <p className={cn('dropdownValue')} onClick={handleClickDropDown}>
          {`По ${selectedValue}`}
        </p>
        <div className={cn('dropdownArrow')}></div>
      </div>

      {showList && (
        <div className={cn('dropdownList')} onBlur={() => setShowList(false)}>
          {options.map(({ id, text }) => (
            <div className={cn('listOption')} onClick={() => handleSelect(id)}>
              <div
                className={cn('listIcon', { listIconActive: value === id })}
              />
              <p>{text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
