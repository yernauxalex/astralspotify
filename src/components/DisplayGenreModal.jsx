import React, { useEffect, useState } from "react";
import { Modal, Button, ProgressBar } from "react-bootstrap";

function DisplayGenreModal(props) {
    const data = props.artistData;
    const userGenreValued = props.userGenreValued;
    const [parsedData, setParsedData] = useState([]);

    // function who only keep the genre that are in the data and in the userGenreValued
    useEffect(() => {
        setParsedData([])
        userGenreValued.map(({ name, value }) => {
            if (data[0].genres.includes(name)) {
                setParsedData(prev => [...prev, { name, value }])
            }
        })
    }, [props])

    return (
        <Modal show={props.show} onHide={props.toggle} key={data.id} centered>
            {data.map(({ name, external_urls }) => (
                <>
                    <Modal.Header closeButton>
                        <Modal.Title>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {parsedData.length === 0 ? (
                            <p>Sorry, we do not have enough data to display affinity</p>
                        ) : (
                            <ul className="list-custom">
                                {parsedData.map(({ name, value }, index) => (
                                    <li key={index}>
                                        {name}
                                        <ProgressBar now={value} label={`${value}%`} />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" href={external_urls.spotify} target="_blank" rel="noreferrer">
                            Go to Spotify
                        </Button>
                    </Modal.Footer>
                </>
            ))}
        </Modal>
    );
}
export default DisplayGenreModal;