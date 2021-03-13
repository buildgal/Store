import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "react-google-login";

function App() {
  
  const responseSuccessGoogle = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "http://localhost:8000/api/googlelogin",
      data: {tokenId: response.tokenId}
    })
  }

  const responseErrorGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className="App">
      <div className = "col-md-6 offset-md-3 text-center">
        <h1>Google login</h1>
        <GoogleLogin
            clientId="803559523817-ojv2q356hbt4hbe6si6m7bbmlmamlp2u.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={'single_host_origin'}
          />,
      </div>
    </div>  
  );
}   

export default App;