import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { LoginDB } from "../../redux/modules/login";
import GoogleLogin from "react-google-login";
import axios from "axios";

const clientId = '536352689591-7udk6o1rggekm61noab7imn027c8jnh5.apps.googleusercontent.com';

export default function GoogleButton(){
  const onSuccess = async(response) => {
    console.log(response);
      
      await axios.get(`https://a-fo-back.shop/oauth/google/callback`, {
        headers: {
          Autorization: response.accessToken,
          "Content-Type": "application/x-www-form-urlencoded",
        }
      })
  }

  const onFailure = (error) => {
      console.log(error);
  }

  return (
    <BtnWrap>
      <GoogleLogin 
      clientId={clientId}
      buttonText="구글로 1초만에 시작하기"
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
    /* background: red !important; */
    border-radius: 30px !important;
    margin-left: -105px !important;
    padding: 10px !important;
    width: 400px !important;
    font-size: 18px !important;
    font-weight: bold !important;
    box-shadow: none !important;
    border: 1px solid #ccc !important;
    
    div {
      margin-left: 60px !important;
      margin-top: 5px !important;
    }
    span {
      font-weight: 700 !important;
      color: #000;
    }
  }
`;