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
  const [timeRange, setTimeRange] = useState('long_term');
  const [timeRangeText, setTimeRangeText] = useState('All time');

  useEffect(() => {
    setToken(props.token);
  }, [props.token, token]);

  function processData(data) {
    console.log(data);
    let userG = getUserGenre(data);
    let userCpt = getUserCompatibility(userG, genre);
    let matchSign = getUserSign(userCpt, userSign, sign);
    setMatchingSign(matchSign);
    getUnicodeMatchingSign(matchSign);
    setDataset(data);
    sessionStorage.setItem(`spotifyData${timeRange}`, JSON.stringify(data));
    setTimeRangeText(timeRange === 'long_term' ? 'all time' : timeRange === 'medium_term' ? 'last 6 months' : 'last 4 weeks');
  }

  function getUnicodeMatchingSign(matchingSign) {
    sign.map((sign) => {
      if (sign.name === matchingSign) {
        console.log(sign.unicode);
        setMatchingUnicode(sign.unicode);
        return sign.unicode;
      }
    });
  }

  const getData = async (e) => {
    e.preventDefault();
    async function getTopArtists(token, spotifyApi) {
      spotifyApi.setAccessToken(token);
      spotifyApi
        .getMyTopArtists({
          limit: 10,
          time_range: timeRange,
        })
        .then(function (data) {
          processData(data);
        })
        .catch(function (err) {
          console.log(err);
        });
    }

    if (token) {
      if (sessionStorage.getItem(`spotifyData${timeRange}`)) {
        let data = JSON.parse(sessionStorage.getItem(`spotifyData${timeRange}`));
        processData(data);
      } else {
        getTopArtists(token, spotifyApi);
      }
    }
  };

  const logout = () => {
    sessionStorage.clear();
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
        <div className="container-select">
          <label>Time range</label>
          <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
            <option value="long_term">All time</option>
            <option value="medium_term">Last 6 months</option>
            <option value="short_term">Last 4 weeks</option>
          </select>
        </div>
        <input type="submit" value="Found your matching sign" onClick={getData} />
        <a href="/" onClick={logout}>
          {' '}
          Logout{' '}
        </a>
      </StyledResult>
      {matchingSign && dataset ? (
        <StyledDisplay>
          <p>
            Your matching sign is {matchingSign} {matchingUnicode}
          </p>
          <h2>Your Top artists {timeRangeText}:</h2>
          <DisplayGenre data={dataset.items} />
        </StyledDisplay>
      ) : null}
    </>
  );
}
export default Result;
