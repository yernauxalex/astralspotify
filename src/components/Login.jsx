import React from 'react';
import StyledLogin from '../styles/StyledLogin';



function Login() {
  // const authEndpoint = 'https://accounts.spotify.com/authorize'
  // const scopes = ['user-top-read',]

  return (
    <StyledLogin>
      <p>Found your matching sign based on your favorite artists on spotify </p>
      <a href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENDID}&response_type=token&redirect_uri=${process.env.REACT_APP_REDIRECTURI}&scope=user-top-read`}>Login with Spotify</a>
    </StyledLogin>
  );
}
export default Login;