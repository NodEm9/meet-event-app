# Project Name: Meet Application

This project is designed to provide a user-friendly event management application. Users can easily manage and visualize event details using this app.

## Features

- Show/Hide Event Details: Users can toggle the visibility of event details to focus on the information they need.
- Specify Number of Events: Users can specify the number of events they want to display at a time, allowing for better customization.
- Use the App When Offline: The app is designed to work seamlessly even when the user is offline, ensuring uninterrupted access to event information.
- Add an App Shortcut to the Home Screen: Users can add a shortcut to the app on their device's home screen for quick and easy access.
- Display Charts Visualizing Event Details: The app provides visually appealing charts that help users analyze and understand event details more effectively.

## User Story

As a user, I want to be able to manage and visualize event details easily. I want to be able to toggle the visibility of event details, specify the number of events I want to see, and use the app even when I'm offline. Additionally, I would like to have the option to add a shortcut to the app on my device's home screen for quick access. Lastly, I would like the app to provide charts that visually represent event details, helping me analyze and understand the data more effectively.

## Gherkin Syntax

```gherkin

Feature: Filter Events By City

  Scenario: When user hasn’t searched for a city, show upcoming events from all cities
    Given user hasn't search for a city
    When user opens the app
    Then the user should see the list of all upcoming events

  Scenario:  User should see a list of suggestions when they search for a city
    Given the user open the app
    When the user start typing a city name in the textbox 
    Then user should see a list of suggestion of cities from the dropdown 

  Scenario: User can select a city from the suggested list
    Given the event list is displayed
    And the list of suggested cities is showing
    When the user selects a city (e.g., “Berlin, Germany”) from the list
    Then their city should be changed to that city (i.e., “Berlin, Germany”)
    And the user should receive a list of upcoming events in that city

Feature: 2: Show/Hide Event Details

  Scenario:  An event element is collapsed by default
    Given user is on the app
    When the app display list of events
    Then the user should see the event element collapsed by default. 
  
  Scenario: User can expand an event to see details
    Given the app is and events details are hidden
    When the user click the show event button 
    Then the user should see the hidden event expand to view.

  Scenario: User can collapse an event to hide details.
    Given the event is expanded and it's in visible
    When user click then hide event button
    Then I should see the event collape and hidden


Feature: Specify Number of Events

  Scenario: Show default number of events when user hasn’t specified a number
    Given the event app is displayed
    And the user has not specified the number of events to display
    When the user view events section
    Then 32 events should be displayed by default

  Scenario: User can change the number of events displayed
    Given the event app is displayed
    And the user has specified the number of events to display as "10"
    When the user changes the number of events to display to "10"
    Then the event list should display "10" events


Feature 4: Use the App When Offline.

  Scenario: Show cached data when there’s no internet connection
    Given the event app is installed as a PWA
    And the app is currently offline
    And there is cached event data available
    When the user opens the app
    Then the app should display the cached event data

  Scenario: Show error when user changes search settings (city, number of events)
    Given the event app is installed as a PWA
    And the app is currently offline
    When the user attempts to change the search settings to a different city "New York"
    Then an error message "Cannot change settings while offline" should be displayed

    Given the event app is installed as a PWA
    And the app is currently offline
    When the user attempts to change the number of events to display to "10"
    Then an error message "Cannot change settings while offline" should be displayed```

  
  Scenario: Add an App Shortcut to the Home Screen
    Given I have the event management app installed
    When I add a shortcut to the home screen
    Then I should be able to access the app quickly from the home screen

  Scenario: Display Charts Visualizing Event Details
    Given I am on the event management app
    When I view event details
    Then I should see visually appealing charts representing the event data
```

-+-+-+-+-
