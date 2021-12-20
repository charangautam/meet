import React, { Component } from 'react'

import './App.css';
import './nprogress.css';
import { getEvents, extractLocations } from './api'

// embedded components
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import EventGenre from './components/EventGenre';
import ScatterPlot from './components/ScatterPlot';

// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';

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
      <Container className="App p-0" fluid>
        <Row>
          <Col sm={12} style={{ height: "50px", backgroundColor: "#1E2127" }} className="d-flex align-items-center">
            <h2 className="mt-o pt-2 ps-3" style={{ color: "#0376E3" }}>meet</h2>
          </Col>
        </Row>

        <Row className="p-3">
          <Col md={12} className="d-flex flex-column justify-content-center align-items-center">
            <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
            <NumberOfEvents activeLocation={this.state.activeLocation} updateEvents={this.updateEvents} />
          </Col>
        </Row>

        <Row className="d-flex justify-content-center p-4">
          <Col sm={12} md={6} className="d-inline recharts">
            <EventGenre events={this.state.events} />
            <ScatterPlot getData={() => this.getData()} />
          </Col>
          <Col sm={12} md={6} className="d-inline p-2 eventComponent">
            <EventList events={this.state.events} />
          </Col>
        </Row>
      </Container>

    )
  }
}

export default App