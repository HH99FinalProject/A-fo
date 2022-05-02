import React from "react";
import GoogleLogin from "react-google-login";

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
    <div>
      <GoogleLogin 
      clientId={clientId}
      responseType={"id_token"}
      onSuccess={onSuccess}
      onFailure={onFailure}/>
    </div>
  )
}