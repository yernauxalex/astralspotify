import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import fonts from '../styles/fonts';

function Login() {
  // const authEndpoint = 'https://accounts.spotify.com/authorize'
  // const scopes = ['user-top-read',]

  return (
    <Stack className="mt-5 d-flex flex-wrap justify-content-start align-items-center" style={{ fontSize: fonts.standard.pLogin }}>
      <p>Find your matching sign based on your favorite artists on spotify </p>
      <Button variant="success" className="w-25" href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENDID}&response_type=token&redirect_uri=${process.env.REACT_APP_REDIRECTURI}&scope=user-top-read`}>Login with Spotify</Button>
    </Stack>
  );
}
export default Login;