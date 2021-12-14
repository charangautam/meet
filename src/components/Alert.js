import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props)
        this.color = null
    }

    getStyle = () => {
        return {
            color: this.color,
            background: "rgba(0, 0, 0, 0.5)",
            fontSize: '14px'
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
        this.color = "#7CD1B8"
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props)
        this.color = "#FF1700"
    }
}

export { InfoAlert, ErrorAlert }