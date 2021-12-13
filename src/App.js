import React, { Component } from 'react'

import './App.css';
import './nprogress.css';
import { getEvents, extractLocations } from './api'

// embedded components
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';

class App extends Component {
  state = {
    events: [],
    locations: []
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === "all" ? events : events.filter((event) => event.location === location));
      this.setState({
        events: locationEvents
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      this.mounted && this.setState({ events, locations: extractLocations(events) });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents />
        <EventList events={this.state.events} />
      </div>
    )
  }
}

export default App