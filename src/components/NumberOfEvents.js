import { useState } from "react"
import PropTypes from 'prop-types'

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32)

  const handleInputChanged = (e) => {
    let value = e.target.value
    setNumber(value)
    let errorText;
    if(value === isNaN || value.length <= 0) { 
      errorText = 'Please enter a valid number'
    } else {
      errorText = ''
    }
    setCurrentNOE(value)
    setErrorAlert(errorText)  
  }
 
  return (
    <div id="numberOfevents">
      <label htmlFor="number" id="number">
        Number of Events:
      <input
        type="text"
        className="number"
        value={number}
        onChange={handleInputChanged}
        />
        </label>
    </div> 
  )
}

export default NumberOfEvents

NumberOfEvents.propTypes = {
  setCurrentNOE: PropTypes.func.isRequired,
  setErrorAlert: PropTypes.func.isRequired
}