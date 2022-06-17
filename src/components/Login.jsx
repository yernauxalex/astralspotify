import React from 'react';
import StyledLogin from '../styles/StyledLogin';



function Login() {
  // const authEndpoint = 'https://accounts.spotify.com/authorize'
  // const clientId = '43bfdb7c53c642d8bfd73c2d94c64983'
  // const redirectUri = 'https://62ac84f931585f0009dd42b8--resonant-medovik-c1c915.netlify.app/'
  // const scopes = ['user-top-read',]

  return (
    <StyledLogin>
      <a href={`https://accounts.spotify.com/authorize?client_id=43bfdb7c53c642d8bfd73c2d94c64983&response_type=token&redirect_uri=https://62ac84f931585f0009dd42b8--resonant-medovik-c1c915.netlify.app/&scope=user-top-read`}>Login with Spotify</a>
    </StyledLogin>
  );
}
export default Login;