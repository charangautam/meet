import React from 'react';
import { shallow } from 'enzyme';

// main component
import EventList from '../components/EventList';
// embedded component
import Event from '../components/Event';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
    test('render correct number of events', () => {
        const EventListWrapper = shallow(<EventList events={mockData} />);
        expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    });
})