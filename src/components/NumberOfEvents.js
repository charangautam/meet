import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        error: ''
    }
    handleInputChanged = (event) => {
        const value = event.target.value;
        this.props.updateEvents(this.props.activeLocation, value)

        if (value > 32 || value < 1) {
            this.setState({
                error: 'Select number from 1 to 32 only'
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
            />
            {this.state.error !== '' && <p>{this.state.error}</p>}
        </div>;
    }
}
export default NumberOfEvents;