import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props)
        this.color = null
    }

    getStyle = () => {
        return {
            color: this.color,
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
        this.color = "#3E8E7E"
    }
}

export { InfoAlert }