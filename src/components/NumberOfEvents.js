import React, { Component } from "react";

// error alert
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        errorAlert: ''
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.props.updateEvents(this.props.activeLocation, value)

        if (value > 32 || value < 1) {
            this.setState({
                errorAlert: 'Select numbers from 1 to 32'
            });
        } else {
            this.setState({
                errorAlert: ''
            });
        }
    };

    render() {
        return <div className="numberOfEvents">
            <label className='label'>Number of Events:</label>
            <input
                type="number"
                className="events-number"
                onChange={this.handleInputChanged}
                placeholder="Filter number of events"
            />
            <ErrorAlert text={this.state.errorAlert} />
        </div>;
    }
}
export default NumberOfEvents;