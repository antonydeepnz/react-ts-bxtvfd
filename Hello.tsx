import React, {
  useState,
  useMemo,
  Fragment,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import cn from 'classnames';

import { useGallery } from './hooks';

import './style.css';

const images = [
  'https://avatars.mds.yandex.net/get-autoru-vos/1966658/4cb402b3c54f297f8ffc79e42ada7063/1200x900n',
  'https://avatars.mds.yandex.net/get-autoru-vos/4701658/8d6414a24d64293d291ef2d354c770b5/1200x900n',
  'https://avatars.mds.yandex.net/get-autoru-vos/4392607/9116728f8e2bcf78228d3ec380ae2496/1200x900n',
  'https://avatars.mds.yandex.net/get-autoru-vos/4119446/50b251641971d9f3b8505b5665ac5cff/1200x900n',
  'https://avatars.mds.yandex.net/get-autoru-vos/4338488/1be05d10a6292a42d3719f7060a15e65/1200x900n',
  'https://avatars.mds.yandex.net/get-autoru-vos/1938005/596aa33d5098422090f35dfe034a3ba7/1200x900n',
];

// <option value="grapefruit">Грейпфрут</option>

const Options = ({
  isOpen,
  options = [],
  selector,
  onSelect,
}: {
  isOpen: boolean;
  options: any;
  selector: 'radio' | 'checkbox';
  onSelect: any;
}) => {
  return (
    <ul className={cn('optionsWrapper', { optionsWrapperOpen: isOpen })}>
      {options.map(({ id, label }) => (
        <li className="option" key={id} value={id} onClick={onSelect}>
          {label}
        </li>
      ))}
    </ul>
  );
};

export const Select = ({ value, options = [], popular = [], onSelect }) => {
  const [inputValue, setInputValue] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const optionsFormatted = useMemo(() => [], []);

  useEffect(() => {
    setInputValue(
      options.find(({ id }) => String(id) === String(value))?.label
    );
  }, [value]);

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleInputLoseFocus = () => {
    setIsOpen(false);
  };

  return (
    <div className="field">
      <input
        className=""
        value={inputValue}
        onClick={handleInputFocus}
        onFocus={handleInputFocus}
        onBlur={handleInputLoseFocus}
      />
      <Options
        isOpen={isOpen}
        options={options}
        selector={'radio'}
        onSelect={onSelect}
      />
    </div>
  );
};

export const ModalGallery = ({ visible, onClose }) => {
  const [selected, setSelected] = useState(0);

  const imageRef = useRef([]);

  const scrollToRef = useCallback(
    (idx: number) => () => {
      setSelected(idx);
      if (imageRef.current[idx]) {
        imageRef.current[idx].scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    },
    []
  );

  return (
    <Fragment>
      {visible && (
        <div className="modalWrapper">
          <div className="modalContent">
            <div className="miniaturesWrapper">
              <div className="miniatures">
                {images.map((image: string, idx: number) => (
                  <img
                    key={idx}
                    alt={image}
                    className={cn('miniaturesImage', {
                      miniaturesImageActive: selected === idx,
                    })}
                    src={image}
                    onClick={scrollToRef(idx)}
                  />
                ))}
              </div>
            </div>
            <div className="mainImageBlock">
              {images.map((image: string, idx: number) => (
                <img
                  key={idx}
                  ref={(ref) => (imageRef.current[idx] = ref)}
                  className="mainImage"
                  src={image}
                />
              ))}
            </div>
            <div className="infoBlock">
              <button className="modalClose" onClick={onClose} />
              <p className="modelName">BMW 5 серия 520i Business</p>
              <p className="modelPrice">от 3 256 000 ₽</p>
              <p className="modelFullPrice">3 371 000 ₽ без скидок</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export const AnotherGallery = () => {
  // const [selected, setSelected] = useState<number>(0);
  // const [active, setActive] = useState<boolean>(false);

  const { selected, active, SelectImage, cancelSelectImage } = useGallery();
  const trimmedImages = useMemo(() => images.slice(0, 5), [images]);
  console.warn(trimmedImages.length);
  return (
    <div className="anotherGallery">
      <img className="anotherGalleryImage" src={images[selected]} />
      <div className="anotherGalleryListofSelect">
        {trimmedImages.map((_, idx) => (
          <React.Fragment>
            <div
              className="anotherGallerySelect"
              // onMouseOver={() => { setSelected(idx); setActive(true)}}
              // onMouseLeave={() => {setSelected(0); setActive(false)}}
              onMouseOver={SelectImage(idx)}
              onMouseLeave={cancelSelectImage}
              style={{ width: `${250 / trimmedImages.length}px` }}
            />
          </React.Fragment>
        ))}
      </div>
      <div
        className={cn('anotherGalleryListofDots', {
          anotherGalleryListofDotsActive: active,
        })}
      >
        {trimmedImages.map((_, idx) => (
          <div
            className={cn('anotherGalleryDot', {
              anotherGalleryDotSelected: selected === idx,
            })}
            style={{ width: `${250 / trimmedImages.length - 4}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ({}) => {
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState<boolean>(false);

  const limitedImageList = useMemo(() => images.slice(0, 5), []);

  const handleShowNextImage = () => {
    selected === images.length - 1 ? setSelected(0) : setSelected(selected + 1);
  };

  const handleShowPrevImage = () => {
    selected === 0 ? setSelected(images.length - 1) : setSelected(selected - 1);
  };

  return (
    <div className="gallery">
      <div className="bigImageWrapper">
        <button
          className={cn('imageSelectionButton', 'prevImageButton', {
            imageSelectionButtonActive: active,
          })}
          onClick={handleShowPrevImage}
        />
        <img
          className="bigImage"
          src={images[selected]}
          onMouseOver={() => {
            setActive(true);
          }}
          onMouseLeave={() => {
            setActive(false);
          }}
        />
        <button
          className={cn('imageSelectionButton', 'nextImageButton', {
            imageSelectionButtonActive: active,
          })}
          onClick={handleShowNextImage}
        />
      </div>
      <div className="imagesList">
        {limitedImageList.map((el, idx) => (
          <React.Fragment>
            <div
              className={cn('imageWrapper', {
                imageActive: selected && idx === 4,
              })}
            >
              <img
                className={cn('image')}
                src={el}
                onMouseOver={() => setSelected(idx)}
              />
              {idx === 4 && (
                <div className={cn('imageOverLimit')}>
                  {`Ещё ${images.length - limitedImageList.length} фото`}
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
