import React from "react";
import { Card, Button } from 'react-bootstrap';


function DisplayArtistCard(props) {
    const { data } = props;

    const handleClick = (event, id) => {
        props.toggle()
        props.fc(id)
    }
    return (
        <>{data.map(({ name, external_urls, images, id }) => (
            <Card key={id} className="m-2 card-custom">
                <a href={external_urls.spotify} target="_blank" rel="noreferrer">
                    <Card.Img variant="top" src={images[1].url} className="card-pic" /> {/* Format des img a revoir */}
                </a>
                <Card.Body className="p-1 p-sm-3">
                    <Card.Title style={{ fontSize: '1rem' }}>{name}</Card.Title>
                    <Button variant="success" href='#genres' onClick={event => handleClick(event, id)} className="button-custom">Affinity</Button>
                    <Button variant="success" href={external_urls.spotify} target="_blank" rel="noreferrer" className="button-custom">
                        Spotify
                    </Button>
                </Card.Body>
            </Card>
        ))}
        </>
    )
}
export default DisplayArtistCard;