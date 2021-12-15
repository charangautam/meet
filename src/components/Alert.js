import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props)
        this.color = null
    }

    getStyle = () => {
        return {
            color: this.color,
            fontSize: '14px',
            fontWeight: '700',
            height: '2rem'
        }
    }

    render() {
        return (
            <div className="alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        )
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props)
        this.color = "#22577E"
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props)
        this.color = "#EC255A"
    }

    getStyle = () => {
        return {
            color: this.color,
            fontStyle: 'italic',
        };
    }
}

export { InfoAlert, ErrorAlert }