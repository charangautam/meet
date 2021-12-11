import React from 'react'

// embedded component
import Event from './Event'

function EventList({ events }) {
    return (
        <ul className="EventList" >
            {events.map(event =>
                <li key={event.id}>
                    <Event event={event} />
                </li>
            )}
        </ul>
    )
}

export default EventList
