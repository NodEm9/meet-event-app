import { useEffect, useState } from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import CityEventsChart from './components/CityEventsChart';
import './App.css';
import EventGenresChart from './components/EventGenresChart';


const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents : allEvents.filter(event => event.location === currentCity)
    const currentEvents = await filteredEvents.slice(0, currentNOE)
    setEvents(currentEvents);
    setAllLocations(extractLocations(allEvents));
  }

  useEffect(() => {
    if (!navigator.onLine) {
      setWarningAlert("You are offline. Events data may be outdated.")
    } else {
      setWarningAlert("");
    }
    fetchData();
  }, [currentCity, currentNOE]);

  return (
    <div className="App"> 
      <header className="header">
        <div className="title">
        <h1>Events App</h1>
          <p>Find events in nearby cities</p>
        </div>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
        </div>
        <div className='events-filter-forms'>
          <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
          />
          </div>
        </header>
      <section className="charts-container">
        <EventGenresChart events={events} /> 
        <CityEventsChart allLocations={allLocations} events={events} />
      </section>
      <div className="events-count">
        <p>Showing {events.length} of {events.length} events</p>
      </div>
      <section className="events-container">
        <EventList events={events} />
      </section>
    </div>
  );
}

export default App;
