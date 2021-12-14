# Objective

## To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events. 


** FEATURE 1: FILTER EVENTS BY CITY **

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
- Given user hasn’t searched for any city
- When the user opens the app
- Then the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city.
- Given the main page is open
- When user starts typing in the city textbox
- Then the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list.
- Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
- When the user selects a city (e.g., “Berlin, Germany”) from the list
- Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city


** FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS **

Scenario 1: An event element is collapsed by default.
- Given the user is on the main page or searched for events
- When the user sees the search results of desired events
- Then the details of each event should not be showing initially

Scenario 2: User can expand an event to see its details.
- Given the user is on the main page or searched for events
- When the user clicks on the more details button on a particular event
- Then the details of that event should be open up

Scenario 3: User can collapse an event to hide its details.
- Given the user has clicked on the more button and is viewing the details of a particular event
- When the user clicks on the hide details button
- Then the details of that event should stop showing and go back to it's hidden view


** FEATURE 3: SPECIFY NUMBER OF EVENTS **

Scenario 1: When user hasn’t specified a number, 32 is the default number.
- Given the user want to search for and view events
- When the user searches without specifying the number of events to view
- Then only 32 events should be displayed to the user

Scenario 2: User can change the number of events they want to see.
- Given the user want to search for and view events
- When the specifies the number of events they want to view
- Then only the number of events specified should be displayed to the user


** FEATURE 4: USE THE APP WHEN OFFLINE **

Scenario 1: Show cached data when there’s no internet connection.
- Given the user does not have internet connection
- When the user uses the app and makes no changes to the settings (city, time range)
- Then the cached data should be displayed to the user

Scenario 2: Show error when user changes the settings (city, time range).
- Given the user does not have internet connection
- When the user uses the app and changes the settings (city, time range)
- Then an error message should be displayed to the user 


** FEATURE 5: DATA VISUALIZATION **

Scenario 1: Show a chart with the number of upcoming events in each city.
- Given the user opens the app
- When the user is on the main page
- Then a chart with the number of upcoming events in each city is diplayed to the user


** Technical Requirements: **
- The app must be a React application.
- The app must be built using the TDD technique.
- The app must use the Google Calendar API and OAuth2 authentication flow.
Page 2 
- The app must use serverless functions (AWS lambda is preferred) for the authorization server
instead of using a traditional server.
- The app’s code must be hosted in a Git repository on GitHub.
- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well
as on IE11.
- The app must display well on all screen sizes (including mobile and tablet) widths of 1920px
and 320px.
- The app must pass Lighthouse’s PWA checklist.
- The app must work offline or in slow network conditions with the help of a service worker.
- Users may be able to install the app on desktop and add the app to their home screen on
mobile.
- The app must be deployed on GitHub Pages.
- The API call must use React axios and async/await.
- The app must implement an alert system using an OOP approach to show information to the
user.
- The app must make use of data visualization (recharts preferred).
- The app must be covered by tests with a coverage rate >= 90%.
- The app must be monitored using an online monitoring tool.
