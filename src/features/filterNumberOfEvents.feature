Feature: Specify number of events

    Scenario: When user hasn’t specified a number, 32 (4 when using mockData) is the default number.
        Given the user want to search for and view events
        When the user searches without specifying the number of events to view
        Then only 32 events should be displayed to the user

    Scenario: User can change the number of events they want to see.
        Given the user want to search for and view events
        When the specifies the number of events they want to view then clicks search
        Then only the number of events specified should be displayed to the user
