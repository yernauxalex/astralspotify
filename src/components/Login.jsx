import React from 'react';
//import { authEndpoint, clientId, redirectUri, scopes } from '../env';
import StyledLogin from '../styles/StyledLogin';



function Login() {
  const authEndpoint = process.env.REACT_APP_AUTHENDPOINT
  const clientId = process.env.REACT_APP_CLIENDID
  const redirectUri = process.env.REACT_APP_REDIRECTURI
  const scopes = ['user-top-read',]

  return (
    <StyledLogin>
      <a href={`${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes}`}>Login with Spotify</a>
    </StyledLogin>
  );
}
export default Login;