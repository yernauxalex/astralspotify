import React, { useEffect, useState } from 'react';
import { getUserGenre, getUserCompatibility, getUserSign } from '../utils/process';
import { sign } from '../datas/sign';
import { genre } from '../datas/genre';
import DisplayGenre from './DisplayGenre';
import StyledResult from '../styles/StyledResult';
import StyledDisplay from '../styles/StyledDisplay';
var Spotify = require('spotify-web-api-js');

var spotifyApi = new Spotify();

function Result(props) {
  const [token, setToken] = useState(null);
  const [dataset, setDataset] = useState(null);
  const [userSign, setUserSign] = useState('');
  const [matchingSign, setMatchingSign] = useState('');
  const [matchingUnicode, setMatchingUnicode] = useState('');

  useEffect(() => {
    setToken(props.token);
    console.log(token);
    // if (token) {

    // }
  }, [props.token, token]);

  const getData = async (e) => {
    e.preventDefault();
    async function getTopArtists(token, spotifyApi) {
      spotifyApi.setAccessToken(token);
      spotifyApi
        .getMyTopArtists({
          limit: 10,
          time_range: 'long_term'
        })
        .then(function (data) {
          console.log(data);
          let userG = getUserGenre(data);
          let userCpt = getUserCompatibility(userG, genre);
          let matchSign = getUserSign(userCpt, userSign, sign);
          setMatchingSign(matchSign);
          getUnicodeMatchingSign(matchSign);
          setDataset(data);
          return data;
        })
        .catch(function (err) {
          console.log(err);
        });
    }
    function getUnicodeMatchingSign(matchingSign){
      sign.map(sign => {
        if(sign.name === matchingSign){
          console.log(sign.unicode);
          setMatchingUnicode(sign.unicode);
          return sign.unicode;
        }
      })
    }
    if (token) {
      getTopArtists(token, spotifyApi);
    }
  };

  return (
    <>
      <StyledResult>
        <div className="container-select">
          <label>Enter your sign</label>
          <select value={userSign} onChange={(e) => setUserSign(e.target.value)}>
            {sign.map(({ name, unicode }) => (
              <option key={name} value={name}>
                {name} {unicode}
              </option>
            ))}
          </select>
        </div>
        <input type="submit" value="Found your matching sign" onClick={getData}/>
        <a href = "/"> Logout </a> 
      </StyledResult>
      {matchingSign && dataset ? (
        <StyledDisplay>
          <p>Your matching sign is {matchingSign} {matchingUnicode}</p>
          <h2>Your Top artists all time:</h2>
          <DisplayGenre data={dataset.items} />
        </StyledDisplay>
      ) : null}
    </>
  );
}
export default Result;
