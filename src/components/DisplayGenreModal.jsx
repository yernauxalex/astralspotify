import React from "react";
import { Modal, Card, ListGroup, Button } from "react-bootstrap";

function DisplayGenreModal(props) {
    const data = props.data;
    console.log(data);
    return (
        <Modal show={props.show} onHide={props.toggle}>
            <Modal.Header closeButton>
                <Modal.Title>Genres</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <>{data.map(({ name, external_urls, genres, images }) => (
                    // eslint-disable-next-line react/jsx-key
                    <Card className="m-2 card-custom">
                        <a href={external_urls.spotify} target="_blank" rel="noreferrer">
                            <Card.Img variant="top" src={images[1].url} className="card-pic" /> {/* Format des img a revoir */}
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
                </>
            </Modal.Body>
        </Modal>
    );
}
export default DisplayGenreModal;