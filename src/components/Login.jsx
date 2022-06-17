import React from 'react';
import StyledLogin from '../styles/StyledLogin';



function Login() {
  const authEndpoint = 'https://accounts.spotify.com/authorize'
  const clientId = '43bfdb7c53c642d8bfd73c2d94c64983'
  const redirectUri = 'https://62ac84f931585f0009dd42b8--resonant-medovik-c1c915.netlify.app/'
  const scopes = ['user-top-read',]

  return (
    <StyledLogin>
      <a href={`${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes}`}>Login with Spotify</a>
    </StyledLogin>
  );
}
export default Login;