import React from "react";
import GoogleLogin from "react-google-login";
import styled from "styled-components";

const clientId = '536352689591-7udk6o1rggekm61noab7imn027c8jnh5.apps.googleusercontent.com';

export default function GoogleLoginBtn({onGoogleLogin}) {
  const onSuccess = async(response) => {
    const { googleId, profileObj : { email, name } } = response;
    await onGoogleLogin (
      
    );
  }

  const onFailure = (error) => {
    console.log(error);
  }

  return (
    <BtnWrap>
      <GoogleLogin 
      clientId={clientId}
      buttonText="1초만에 로그인하기"
      responseType={"id_token"}
      onSuccess={onSuccess}
      onFailure={onFailure}
      className="googleBtn"
      />
    </BtnWrap>
  )
}

const BtnWrap = styled.div`
  /* background: gray; */
  .googleBtn {
    background: red !important;
    border-radius: 10px !important;
    padding: 10px !important;
    width: 300px !important;
  }
`;