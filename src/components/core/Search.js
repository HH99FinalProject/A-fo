import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { getPostSearchDB } from '../../redux/modules/board';
import { Button, Div, Image, Input, Text } from '../ui';



const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const formRef = useRef();
  const [continent, setContinent] = useState();
  const [purpose, setPurpose] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const keyWord = inputRef.current.value;
    const selectContinent = continent === undefined ? '모든대륙' : continent;
    const selectPurpose = purpose === undefined ? '모든목적' : purpose;
    const data = { keyWord, selectContinent, selectPurpose };
    dispatch(getPostSearchDB(data));
    formRef.current.reset();
  }
  // continent === undefined ? '모든대륙' : continent;
  
  const continentSelect = (e) => {
    setContinent(e.target.value);
  }
  const purposeSelect = (e) => {
    setPurpose(e.target.value);
  }
  console.log(continent, purpose);
  return (
    <Div
      spaceBetween
      width="840px"
      backgroundColor="#d2dfff"
      border="1px solid #000"
      margin="40px auto 50px"
      padding="10px"
      alignItems="center">
      <form ref={formRef} onSubmit={onSubmit} style={{width: "70%"}}>  
        <input
          ref={inputRef}
          style={{
            width: '100%',
            display: 'inline-block',
            padding: '10px 15px',
            fontSize: '20px',
            border: '1px solid #000',
            background: '#d2dfff',
            outline: 'none',
          }}
          placeholder="검색어를 입력해주세요"
        />
      </form>
      <Div>
        <Select onChange={continentSelect} defaultValue='모든대륙'>
          <option>모든대륙</option>
          <option>아시아</option>
          <option>유럽</option>
          <option>오세아니아</option>
          <option>남아메리카</option>
          <option>북아메리카</option>
        </Select>
        <Select onChange={purposeSelect} defaultValue='모든목적'>
          <option>모든목적</option>
          <option>워홀</option>
          <option>이민</option>
          <option>취업</option>
          <option>유학</option>
        </Select>
      </Div>
    </Div>
  );
};

export default Search;

const Select = styled.select`
  padding: 10px;
  font-size: 14px;
  border: none;
  background: #d2dfff;
  &:focus {
    border: none;
  }
  option {
    background: #fff;
  }
`;
