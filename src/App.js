import React, { Component } from 'react'

import './App.css';
import './nprogress.css';
import { getEvents, extractLocations } from './api'

// embedded components
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import ScatterPlot from './components/ScatterPlot';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    activeLocation: 'all'
  }

  updateEvents = (location, eventCount = this.state.eventCount) => {
    getEvents().then((events) => {
      let locationEvents = (location === "all" ? events : events.filter((event) => event.location === location));
      locationEvents = locationEvents.slice(0, eventCount)
      this.setState({
        events: locationEvents,
        numberOfEvents: eventCount,
        activeLocation: location
      });
    });
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

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
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents activeLocation={this.state.activeLocation} updateEvents={this.updateEvents} />
        <h4>Events in each city</h4>
        <ScatterPlot getData={() => this.getData()} />
        <EventList events={this.state.events} />
      </div>
    )
  }
}

export default App