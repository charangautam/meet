Feature: Specify number of events

    Scenario: When user hasn’t specified a number, all events should be displayed.
        Given the user want to search for and view events
        When the user searches without specifying the number of events to view
        Then all events should be displayed to the user

    Scenario: User can change the number of events they want to see.
        Given the user want to search for and view events
        When the specifies the number of events they want to view then clicks search
        Then only the number of events specified should be displayed to the user
