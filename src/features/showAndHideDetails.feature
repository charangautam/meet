Feature: Show and hide event details

    Scenario: An event element is collapsed by default.
        Given the user is on the main page or searched for events
        When the user sees the search results of desired events
        Then the details of each event should not be showing initially

    Scenario: User can expand an event to see its details.
        Given the user is on the main page or searched for events
        When the user clicks on the more details button on a particular event
        Then the details of that event should be open up

    Scenario: User can collapse an event to hide its details.
        Given the user has clicked on the more button and is viewing the details of a particular event
        When the user clicks on the hide details button
        Then the details of that event should stop showing and go back to it's hidden view

