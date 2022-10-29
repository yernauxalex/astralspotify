import React, { useEffect, useState } from 'react';
import { getUserGenre, getUserCompatibility, getUserSign, getUserCoef, getUserGenreValue } from '../utils/process';
import { sign } from '../datas/sign';
import { genre } from '../datas/genre';
import { Container, Col, Form, Button, Row } from 'react-bootstrap';
import DisplayArtistCard from './DisplayArtistCard';
import DisplayGenreModal from './DisplayGenreModal';
import fonts from '../styles/fonts';
import { TwitterShareButton } from 'react-twitter-embed';
var Spotify = require('spotify-web-api-js');

var spotifyApi = new Spotify();

function Result(props) {
  const [token, setToken] = useState(null);
  const [dataset, setDataset] = useState(null);
  const [userSign, setUserSign] = useState('aries');
  const [matchingSign, setMatchingSign] = useState('');
  const [matchingUnicode, setMatchingUnicode] = useState('');
  const [timeRange, setTimeRange] = useState('long_term');
  const [timeRangeText, setTimeRangeText] = useState('All time');
  const [shareText, setShareText] = useState('');

  // Gestion du modal 
  const [show, setShow] = useState(false);
  const [artistData, setArtistData] = useState(null);
  const [userGenreValued, setUserGenreValued] = useState([]);
  const toggleModal = () => setShow(prevShow => !prevShow)

  function getDataModal(artist_id) {
    const newData = [...dataset.items]
    const artistData = newData.filter((artist) => artist.id === artist_id)
    setArtistData(artistData)
  }

  useEffect(() => {
    setToken(props.token);
  }, [props.token, token]);

  function processData(data) {
    console.log(data);
    let userG = getUserGenre(data);
    let userCoef = getUserCoef(userSign, sign)
    let userGenreValued = getUserGenreValue(userG, userCoef, genre);
    setUserGenreValued(userGenreValued);
    let userCpt = getUserCompatibility(userGenreValued);
    let matchSign = getUserSign(userCpt, userSign, sign);
    setMatchingSign(matchSign);
    getUnicodeMatchingSign(matchSign);
    setDataset(data);
    sessionStorage.setItem(`spotifyData_${timeRange}`, JSON.stringify(data));
    setTimeRangeText(timeRange === 'long_term' ? 'all time' : timeRange === 'medium_term' ? 'last 6 months' : 'last 4 weeks');
    setShareText(`Based on my Spotify top artist for me a ${userSign}, my perfect match is a ${matchSign} via `);
  }

  function getUnicodeMatchingSign(matchingSign) {
    sign.map((sign) => {
      if (sign.name === matchingSign) {
        console.log(sign.unicode);
        setMatchingUnicode(sign.unicode);
        return sign.unicode;
      }
      return null;
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

  return (
    <>
      <Container className="mt-5">
        <Form>
          <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formGroupSign">
            <Form.Label column md={2} xs="auto">Enter your sign</Form.Label>
            <Col md={3} xs="auto">
              <Form.Select value={userSign} onChange={(e) => setUserSign(e.target.value)} aria-label="enter your astro sign">
                {sign.map(({ name, unicode }) => (
                  <option key={name} value={name}>
                    {name} {unicode}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formGroupTimeRange">
            <Form.Label column md={2} xs="auto">Time range</Form.Label>
            <Col md={3} xs="auto">
              <Form.Select value={timeRange} onChange={(e) => setTimeRange(e.target.value)} aria-label="select the time range">
                <option value="long_term">All time</option>
                <option value="medium_term">Last 6 months</option>
                <option value="short_term">Last 4 weeks</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group className="d-flex justify-content-center" controlId="formGroupButton">
            <Button variant="success" type="submit" className="w-50" onClick={getData}>Found your matching sign</Button>
          </Form.Group>
        </Form>
      </Container>
      {matchingSign && dataset && shareText ? (
        <Container className="mt-5 mx-auto d-flex flex-column justify-content-center">
          <p style={{ fontSize: fonts.standard.pResult }} className="d-flex justify-content-center">
            Your matching sign is {matchingSign} {matchingUnicode}
          </p>
          <h2 style={{ fontSize: fonts.standard.pResult }} className="d-flex justify-content-center">Your Top artists {timeRangeText}:</h2>
        </Container>
      ) : null}
      {matchingSign && dataset && shareText ? (
        <>
          <Container fluid className="mt-5 mx-0 px-0 d-flex flex-wrap justify-content-center align-items-start" >
            <DisplayArtistCard data={dataset.items} toggle={toggleModal} fc={getDataModal} />
            {artistData ? <DisplayGenreModal artistData={artistData} userGenreValued={userGenreValued} show={show} toggle={toggleModal} /> : null}
          </Container>
          <Container className="mt-3 d-flex justify-content-center" >
            <TwitterShareButton
              key={shareText}
              url={'https://resonant-medovik-c1c915.netlify.app/'}
              options={{
                text: shareText,
                via: 'AstroSpotify',
                size: 'large'
              }}
            />
          </Container>
        </>
      ) : null
      }
    </>
  );
}
export default Result;
