import React from 'react';
import styled from 'styled-components';

import { Button, Div, Image, Input, Text } from '../ui';

const Search = () => {
  return (
    <Div width="840px" margin="40px auto 50px" padding="20px" alignItems="center">
      <input style={{width: '76%', display: 'inline-block', padding: '10px 15px', fontSize: '16px', borderRadius: '20px'}} placeholder="검색어를 입력해주세요"/>
      <Select>
        <option value="continent">대륙</option>
        <option value="asia">아시아</option>
        <option value="europe">유럽</option>
        <option value="oceania">오세아니아</option>
        <option value="southA">남아메리카</option>
        <option value="northA">북아메리카</option>
      </Select>
      <Select>
        <option>목적</option>
        <option>워홀</option>
        <option>이민</option>
        <option>취업</option>
        <option>유학</option>
      </Select>
    </Div>
  )
};

export default Search;

const Select = styled.select`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 20px;
  &:focus {
    border: 1px solid #ccc;
  }
`;