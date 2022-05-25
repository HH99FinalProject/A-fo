import React from 'react';
import { useDispatch } from 'react-redux';
import { googleLoginDB } from '../../redux/modules/login';

const Google = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get('code');

  React.useEffect(async () => {
    await dispatch(googleLoginDB(code));
  }, []);

  return null;
};

export default Google;
