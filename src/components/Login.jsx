import React from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from '../env';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <a href={`${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes}`}>Login to Spotify</a>
    </div>
  );
}
export default Login;