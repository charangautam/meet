import React, { Component } from 'react'

import Event from './Event'

class EventList extends Component {
    render() {
        const { events } = this.props
        return (
            <ul className="event-list pt-2 ps-4 pe-4" >
                {events.map(event =>
                    <li key={event.id}>
                        <Event event={event} />
                    </li>
                )}
            </ul>
        )
    }
}

export default EventList