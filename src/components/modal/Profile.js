import React from 'react';
import { history } from '../../redux/configureStore';

import styled from 'styled-components';
import { Div, Text, Image, Button } from '../ui';

const Profile = () => {
  return (
    <React.Fragment>
      <Div width="1400px" margin="100px auto" border="1px solid black">
        <Text>내 정보</Text>
      </Div>
    </React.Fragment>
  );
};

export default Profile;
