import React from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from '../env';
import StyledLogin from '../styles/StyledLogin';



function Login() {
  return (
    <StyledLogin>
      <a href={`${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes}`}>Login with Spotify</a>
    </StyledLogin>
  );
}
export default Login;