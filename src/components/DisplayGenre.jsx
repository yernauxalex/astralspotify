import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function DisplayGenre(props) {
    const { data } = props;
    console.log(data);
    return (
        <>{data.map(({ name, external_urls, genres, images }) => (
            // eslint-disable-next-line react/jsx-key
            <Card style={{ width: '18rem' }} className="m-2">
                <a href={external_urls.spotify} target="_blank" rel="noreferrer">
                    <Card.Img variant="top" src={images[1].url} style={{ height: '286px', width: '286px' }} /> {/* Format des img a revoir */}
                </a>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <ListGroup variant="flush" as='ul'>
                        {genres.map((name) => (
                            <ListGroup.Item as='li' key={name}>{name}</ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Button variant="success" href={external_urls.spotify} target="_blank" rel="noreferrer">
                        Go to Spotify
                    </Button>
                </Card.Body>
            </Card>
        ))}
            {/* <ul className="main-list">
                {data.map(({ name, external_urls, genres }) => (
                    // eslint-disable-next-line react/jsx-key
                    <a href={external_urls.spotify} target="_blank" rel="noreferrer">
                        <li key={name} className="main-list-items">
                            <h3>{name}</h3>
                            <ul className="secondary-list">
                                {genres.map((name) => (
                                    <li key={name} className="secondary-list-items">{name}</li>
                                ))}
                            </ul>
                        </li>
                    </a>
                ))}
            </ul> */}
        </>
    )
}
export default DisplayGenre;