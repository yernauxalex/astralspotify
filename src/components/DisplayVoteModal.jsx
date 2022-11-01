import React from "react";
import { Modal } from "react-bootstrap";

function DisplayVoteModal(props) {
    const userGenre = props.userGenre;
    return (
        <Modal show={props.show} onHide={props.toggle} centered>
            <Modal.Header closeButton>
                <Modal.Title>Help us to get a more accurate matching</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Thank you for your vote!</p>
            </Modal.Body>
        </Modal>
    );
}
export default DisplayVoteModal;
