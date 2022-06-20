import React, { useEffect, useState } from 'react';
import Login from '../components/Login';
import Result from '../components/Result';
import hash from '../utils/hash';
var Spotify = require('spotify-web-api-js');

var spotifyApi = new Spotify();


function Home() {
  const [token, setToken] = useState(null);

  

  useEffect(() => {
    const accessToken = hash.access_token;
    if (accessToken) {
      setToken(accessToken);
      spotifyApi.setAccessToken(accessToken);
    }
  }, [])
  
  return (
    <>
      {token ? (
        <Result token={token} />
      ) : ( <Login /> )}
    </>
  );
}
export default Home;