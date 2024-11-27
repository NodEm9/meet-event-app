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
