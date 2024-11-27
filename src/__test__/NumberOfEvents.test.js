/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // Add this line to import the 'userEvent' library
import NumberOfEvents from "../components/NumberOfEvents";
import { getEvents } from "../api";


describe('<NumberOfEvents /> component', () => { 
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />);
  });
 
  test('render element with role of textbox', () => { 
    const input = NumberOfEventsComponent.queryByRole('textbox');
    expect(input).toBeInTheDocument(); 
  });


  test('default number of events is 32', () => {
    expect( NumberOfEventsComponent.getByRole('textbox')).toHaveValue('32');  
  });  

  test('change number of events when a user types in the textbox', async () => { 
    const numverOfEvents = NumberOfEventsComponent.getByRole('textbox');
    const user = userEvent.setup(); 
    await user.type(numverOfEvents, '{backspace}{backspace}10');   
    const allEvents = await getEvents(); 
    NumberOfEventsComponent.rerender(<NumberOfEvents setCurrentNOE={allEvents} setErrorAlert={() => {}} />);   
    expect(numverOfEvents).toHaveValue('10'); 
  }); 
});  
 
