import React, { useState, useEffect } from "react";
import { Card, ListGroup, Button } from 'react-bootstrap';


function DisplayArtistCard(props) {
    const { data } = props;
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 992;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
    }, [])

    const handleClick = (event, id) => {
        props.toggle()
        props.fc(id)
    }
    console.log(data);
    return (
        <>{data.map(({ name, external_urls, genres, images, id }) => (
            // eslint-disable-next-line react/jsx-key
            <Card className="m-2 card-custom">
                <a href={external_urls.spotify} target="_blank" rel="noreferrer">
                    <Card.Img variant="top" src={images[1].url} className="card-pic" /> {/* Format des img a revoir */}
                </a>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    {width > breakpoint ? (
                        <ListGroup variant="flush" as='ul'>
                            {genres.map((name) => (
                                <ListGroup.Item as='li' key={name}>{name}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    ) : (
                        <Button variant="success" href='#genres' onClick={event => handleClick(event, id)}>See genres</Button>
                    )}
                    <Button variant="success" href={external_urls.spotify} target="_blank" rel="noreferrer">
                        Go to Spotify
                    </Button>
                </Card.Body>
            </Card>
        ))}
        </>
    )
}
export default DisplayArtistCard;