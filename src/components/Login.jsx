import React from 'react';
import { Button, Stack } from 'react-bootstrap';

function Login() {
  // const authEndpoint = 'https://accounts.spotify.com/authorize'
  // const scopes = ['user-top-read',]

  return (
    <Stack className="mt-5 d-flex flex-wrap justify-content-start align-items-center" style={{ textAlign: 'center' }} >
      <p>Find your matching sign based on your favorite artists on spotify </p>
      <Button variant="success" href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENDID}&response_type=token&redirect_uri=${process.env.REACT_APP_REDIRECTURI}&scope=user-top-read`}>Login with Spotify</Button>
    </Stack>
  );
}
export default Login;