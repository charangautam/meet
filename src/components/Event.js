import React, { Component } from 'react'
import moment from 'moment';

// react bootstrap
import { Modal, Button, CloseButton } from 'react-bootstrap';

class Event extends Component {
    state = {
        showDetails: false
    }

    handleClick = (e) => {
        this.setState({ showDetails: !this.state.showDetails });
    }

    render() {
        const { event } = this.props
        const { showDetails } = this.state;

        return (
            <div className="event mb-4 pt-2 p-4">
                <h1 className="summary">{event.summary}</h1>
                <p className="time text-muted">{moment(event.start.dateTime).format('lll')} - {moment(event.end.dateTime).format("h:mm a")}</p>
                <p className="location text-muted"><i className="fas fa-map-marker-alt me-2"></i>{event.location}</p>
                <hr></hr>
                <Button className="details" size="lg" onClick={this.handleClick}>{showDetails ? 'Hide Details' : 'Show Details'}</Button>
                <Modal show={showDetails} onHide={this.handleClick} centered style={{ color: "#FFFFFF" }}>
                    <Modal.Header className="d-flex align-items-start border-0" >
                        <div>
                            <Modal.Title className="summary">{event.summary}</Modal.Title>
                            <p className="time text-muted">{moment(event.start.dateTime).format('lll')} - {moment(event.end.dateTime).format("h:mm a")}</p>
                            <p className="location text-muted"><i className="fas fa-map-marker-alt me-2"></i>{event.location}</p>
                        </div>
                        <CloseButton variant="white" onClick={this.handleClick} style={{ borderRadius: "50%" }} />
                    </Modal.Header>
                    <Modal.Body className="description">{event.description}</Modal.Body>
                    <Modal.Footer className="border-0">
                        <Button variant="secondary" onClick={this.handleClick}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Event;