import React from 'react';
import { shallow } from 'enzyme';

// main component
import App from '../App';
// embedded component
import CitySearch from '../components/CitySearch';
import NumberOfEvents from '../components/NumberOfEvents';
import EventList from '../components/EventList';

describe('<App /> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });

    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });

    test('render number of event', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });

    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });


})