import React, { ChangeEvent, useEffect, useState } from 'react';

import styles from './SearchBlock.module.css';
import Button from '../Common/Button/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchProductsSearch } from '../../redux/slices/ProductsSlice';
import { useDebounce } from '../../hooks/useDebounce';

type Props = {
  className: string;
};

const SearchBlock: React.FC<Props> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(() => {
    dispatch(fetchProductsSearch(debouncedInputValue));
  }, [debouncedInputValue, dispatch]);

  const onSearchProducts = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onFetchProduct();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onFetchProduct();
    }
  };

  const onFetchProduct = () => {
    dispatch(fetchProductsSearch(inputValue));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <form className={`${styles.search} ${props.className}`}>
      <label htmlFor="searchInput">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search by title"
        />
      </label>
      <Button
        type="primary-search"
        text="Search"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => onSearchProducts(e)}
      />
    </form>
  );
};

export default SearchBlock;
