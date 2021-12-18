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
            <div className="filterNumber">
                <label className="me-3 text-secondary">Number of Events</label>
                <input
                    type="number"
                    className="events-number"
                    onChange={this.handleInputChanged}
                />
            </div>
            <ErrorAlert text={this.state.errorAlert} />
        </div>;
    }
}
export default NumberOfEvents;