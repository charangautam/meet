import React from 'react';
import { shallow } from 'enzyme';

// main component
import CitySearch from '../components/CitySearch';

describe('<CitySearch /> component', () => {
    let CitySearchWrapper;
    beforeAll(() => {
        CitySearchWrapper = shallow(<CitySearch />)
    })

    test('render text input', () => {
        expect(CitySearchWrapper.find('.city')).toHaveLength(1);
    });

    test('render list of suggestions', () => {
        expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
    });
})