import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';

// components 
import App from '../App';
// import NumberOfEvents from '../components/NumberOfEvents';


const feature = loadFeature('./src/features/filterNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 (4 when using mockData) is the default number.', ({ given, when, then }) => {
        given('the user want to search for and view events', () => {

        });

        let AppWrapper;
        when('the user searches without specifying the number of events to view', () => {
            AppWrapper = mount(<App />)
        });

        then(/^only (\d+) events should be displayed to the user$/, async (arg0) => {
            await AppWrapper.update()
            expect(AppWrapper.find('.event-list li')).toHaveLength(4)
        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user want to search for and view events', () => {
            AppWrapper = mount(<App />)
        });

        when('the specifies the number of events they want to view then clicks search', async () => {
            AppWrapper.find('.events-number').simulate('change', { target: { value: 2 } })
        });

        then('only the number of events specified should be displayed to the user', async () => {
            await AppWrapper.update()
            expect(AppWrapper.find('.event-list li')).toHaveLength(2)
        });
    });
})
