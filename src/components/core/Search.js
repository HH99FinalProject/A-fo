import React from 'react';

import { Button, Div, Image, Input, Text } from '../ui';

const Search = () => {
  return (
    <Div width="1400px" margin="20px auto 50px" border="1px solid #000" padding="20px" alignItems="center">
      <select>
        <option>대륙</option>
        <option>아시아</option>
        <option>유럽</option>
        <option>오세아니아</option>
        <option>남아메리카</option>
        <option>북아메리카</option>
      </select>
      <select>
        <option>목적</option>
        <option>워홀</option>
        <option>이민</option>
        <option>취업</option>
        <option>유학</option>
      </select>
      <input style={{width: '80%', height:"20px", display: 'inline-block'}} placeholder="검색어를 입력해주세요"/>
      <Button backgroundColor="skyblue" width="60px" border="1px solid #eee">검색</Button>
    </Div>
  )
};

export default Search;
