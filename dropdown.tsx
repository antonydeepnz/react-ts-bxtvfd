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
}

export const DropDown: FC<IDropDown> = ({ options }) => {
  const [val, setVal] = useState(options[0].id);
  const [showList, setShowList] = useState(false);

  const handleClickDropDown = () => {
    setShowList(true);
  };

  const handleSelect = (id) => {
    setVal(id);
    setShowList(false);
  };

  const selectedValue = useMemo(() => {
    const value = options.find(({ id }) => id === val).text;
    return value[0].toLowerCase() + value.slice(1);
  }, [val]);

  return (
    <div className={cn('dropdownWrapper')}>
      <p className={cn('dropdownInput')} onClick={handleClickDropDown}>
        {`По ${selectedValue}`}
      </p>
      {showList && (
        <div className={cn('dropdownList')} onBlur={() => setShowList(false)}>
          {options.map(({ id, text }) => (
            <div className={cn('listOption')} onClick={() => handleSelect(id)}>
              <div className={cn('listIcon', { listIconActive: val === id })} />
              <p>{text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
