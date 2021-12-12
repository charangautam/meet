import React from 'react';
import { shallow } from 'enzyme';

// main component
import NumberOfEvents from '../components/NumberOfEvents';
import { mockData } from '../mock-data';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents events={mockData[1]} />);
    });

    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.events-number')).toHaveLength(1);
    });

    test('default number of events rendered', () => {
        expect(NumberOfEventsWrapper.state('eventsNumber')).toBe(32);
    })

    test("number of events is changed in input", () => {
        NumberOfEventsWrapper.find(".events-number").simulate("change", {
            target: { value: 16 },
        });
        expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(16);
    });

});