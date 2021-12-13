import React from 'react';
import { shallow } from 'enzyme';

// main component
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvent={() => { }} />);
    });

    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.events-number')).toHaveLength(1);
    });
});