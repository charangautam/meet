import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { shallow, mount } from 'enzyme';

// mock api
import { mockData } from '../mock-data';
// components 
import App from '../App';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showAndHideDetails.feature');

defineFeature(feature, test => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[1]} />)
    })
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user is on the main page or searched for events', () => {
            AppWrapper = mount(<App />)
        });

        when('the user sees the search results of desired events', async () => {
            await AppWrapper.update()
            expect(AppWrapper.find('event-list li')).toBeDefined()
        });

        then('the details of each event should not be showing initially', () => {
            expect(EventWrapper.find(".details").text()).toBe("Show Details");
        });
    });

    test('User can expand an event to see its details.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user is on the main page or searched for events', () => {
            AppWrapper = mount(<App />)
        });

        when('the user clicks on the more details button on a particular event', () => {
            EventWrapper.find('.event .details').simulate('click')
        });

        then('the details of that event should be open up', () => {
            expect(EventWrapper.find(".details").text()).toBe("Hide Details");
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        given('the user has clicked on the more button and is viewing the details of a particular event', () => {
            expect(EventWrapper.find('.event .description')).toHaveLength(1)
        });

        when('the user clicks on the hide details button', () => {
            EventWrapper.find('.event .details').simulate('click')
        });

        then('the details of that event should stop showing and go back to it\'s hidden view', () => {
            expect(EventWrapper.find(".details").text()).toBe("Show Details");
        });
    });
})