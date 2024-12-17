import { useState, useEffect } from 'react';

const CitySearch = ({ allLocations, setCurrentCity, setInfoAlert }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false);
    setCurrentCity(value);
    setInfoAlert('');   
  };  

  const handleInputChanged = (event) => {
    const value = event.target.value;
    const filteredLocations = allLocations ? allLocations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    }) : [];

    setQuery(value);
    setSuggestions(filteredLocations);

    let infoText;
    if (filteredLocations.length === 0) {
      infoText = 'We can not find the city you are looking for. Please try another city';
    } else {
      infoText = '';
    }
    setInfoAlert(infoText);
  };

  useEffect(() => {
    setSuggestions(allLocations);
  }, [`${allLocations}`]);
 
  return (
    <div id="city-search">
      <label htmlFor="city" id='city-label'>
        Search City:
      <input 
        type="text"
        className="city" 
        value={query}
        placeholder='Search for a city...'
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
        onInput={() => (
          query.length === 0 ? setShowSuggestions(false) : setShowSuggestions(true)
        )}   
        />
        </label>
      {showSuggestions ? <ul className="suggestions">
        {suggestions.map((suggestion) => {
          return <li key={suggestion} onClick={handleItemClicked}>{suggestion}</li>
        })}
        <li key='See all cities' onClick={handleItemClicked} >
          <b>See all cities</b>
        </li>
      </ul> : null}
    </div>
  )
}

export default CitySearch