import React, { Component } from 'react'
import moment from 'moment';

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
                <p className="location text-muted"><i class="fas fa-map-marker-alt me-2"></i>{event.location}</p>
                <hr></hr>
                {
                    showDetails && <p className="description">{event.description}</p>
                }
                <button className="details" onClick={this.handleClick}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
            </div>
        )
    }
}

export default Event;