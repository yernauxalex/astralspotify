import React, { useEffect, useState }from 'react';
import { userGenre, userCompatibility, userSign } from '../utils/process';
import { sign }   from '../datas/sign';
import { genre } from '../datas/genre';
var Spotify = require('spotify-web-api-js');

var spotifyApi = new Spotify();


async function getTopArtists(token, spotifyApi) {
  spotifyApi.setAccessToken(token);
  spotifyApi.getMyTopArtists({
      limit: 10,
      time_range: 'long_term'
  }).then(function (data) {
      console.log(data);
      let userG = userGenre(data);
      let userCpt = userCompatibility(userG, genre)
      userSign(userCpt, userSign, sign)
  }
  ).catch(function (err) {
      console.log(err);
  }
  );
}

function Result(props) {
  const [token, setToken] = useState(null);
  const [ userSign, setUserSign ] = useState('');
  
  useEffect(() => {
    setToken(props.token);
    setUserSign('aries')
    console.log(token);
      if (token) {
        getTopArtists(token, spotifyApi);
      }
    }, [props.token, token])
  

  return (
    <div>
      <h1>Result</h1>
    </div>
  );
}
export default Result;