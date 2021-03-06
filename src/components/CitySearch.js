import React, { Component } from 'react';

// info alert
import { InfoAlert } from './Alert';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: false,
        infoText: ''
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (!suggestions.length) {
            this.setState({
                query: value,
                infoText: "We cannot find the city you are looking for. Please try another city"
            });
        } else {
            this.setState({
                query: value,
                suggestions,
                infoText: ''
            });
        }

    }

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            suggestions: [],
            showSuggestions: false,
            infoText: ''
        });
        this.props.updateEvents(suggestion)
    }

    render() {
        return (
            <div className="citySearch">
                <InfoAlert text={this.state.infoText} />
                <h3 className="mb-4 text-center" style={{ fontWeight: "700" }}>Choose your nearest city</h3>
                <div className="searcher">
                    <input
                        style={{ fontFamily: "FontAwesome" }}
                        type="text"
                        className="city"
                        value={this.state.query}
                        onChange={this.handleInputChanged}
                        onFocus={() => this.setState({ showSuggestions: true })}
                        placeholder="&#xF002;"
                    />
                    <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: "none" }}>
                        {this.state.suggestions.map((suggestion) => (
                            <li
                                key={suggestion}
                                onClick={() => this.handleItemClicked(suggestion)}
                            >
                                {suggestion}
                            </li>
                        ))}
                        <li onClick={() => this.handleItemClicked("all")}>
                            <b>See all cities</b>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default CitySearch

