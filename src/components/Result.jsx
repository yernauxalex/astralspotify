import React, { useEffect, useState }from 'react';
import { getUserGenre, getUserCompatibility, getUserSign } from '../utils/process';
import { sign }   from '../datas/sign';
import { genre } from '../datas/genre';
import DisplayGenre from './DisplayGenre';
var Spotify = require('spotify-web-api-js');

var spotifyApi = new Spotify();




function Result(props) {
  const [token, setToken] = useState(null);
  const [dataset, setDataset] = useState(null);
  const [ userSign, setUserSign ] = useState('');
  const [ matchingSign, setMatchingSign ] = useState('');
  
  useEffect(() => {
    setToken(props.token);
    console.log(token);
      if (token) {
        
      }
    }, [props.token, token])
  
    const getData = async (e) => {
      e.preventDefault();
      async function getTopArtists(token, spotifyApi) {
        spotifyApi.setAccessToken(token);
        spotifyApi.getMyTopArtists({
            limit: 10,
            time_range: 'long_term'
        }).then(function (data) {
            console.log(data);
            let userG = getUserGenre(data);
            let userCpt = getUserCompatibility(userG, genre)
            let matchSign = getUserSign(userCpt, userSign, sign)
            setMatchingSign(matchSign)
            setDataset(data);
            return data;
        }
        ).catch(function (err) {
            console.log(err);
        }
        );
      }
      if (token) {
        getTopArtists(token, spotifyApi);
      }
    }

  return (
    <>
    <div>
      <h1>Result</h1>
      <label>Enter your sign</label>
      <select value={userSign} onChange={(e) => setUserSign(e.target.value)}>
        {sign.map(({name, unicode}) => (
          <option key={name} value={name}>{name} {unicode}</option>
        ))}
        </select>
      <input type="submit" value="Found your matching sign" onClick={getData}/>
    </div>
    {matchingSign && dataset ? (
      <div>
      <h2>Your matching sign is {matchingSign}</h2>
      <DisplayGenre data={dataset.items} />
    </div>
    ) : null}
    </>
  );
}
export default Result;