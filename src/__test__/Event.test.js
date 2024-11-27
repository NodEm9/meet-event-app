/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render } from "@testing-library/react";
import Event from "../components/Event";
import mockData from "../mock-data";
import userEvent from "@testing-library/user-event";  
import { getEvents } from "../api";

describe('<Event /> component', () => {
  let EventComponent; 
  const event = mockData[0];  
  beforeEach(() => {
    EventComponent = render(<Event event={event} />);  
  });

  test('render event component', () => { 
    expect(EventComponent).toBeTruthy();
  });

  test('event details are hidden by default', () => {
  const eventsDetails = EventComponent.container.querySelector('.details');
   expect(eventsDetails).not.toBeInTheDocument(); 
 });
      
  test('render event title', async () => {   
    const allEvents = await getEvents();
    EventComponent.rerender(<Event event={allEvents[0]} />);
      expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  }); 

  test('render event location', async () => {   
    const allEvents = await getEvents();
    EventComponent.rerender(<Event event={allEvents[0]} />);
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument(); 
  });

  test('render events details button with title ("Show details")', () => {  
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();    
  });

  test('Show details section, when user click the show deatials button', async () => { 
    const user = userEvent.setup();
    const button = EventComponent.queryByText('Show Details'); 
    await user.click(button); 
    const details = EventComponent.container.querySelector('.details');  
    expect(details).toBeInTheDocument(); 
  });
 
  test('Hide details section, when user click the hide deatials button', async () => { 
    const user = userEvent.setup();
    let button = EventComponent.queryByText('Show Details'); 
    await user.click(button); 
    let details = EventComponent.container.querySelector('.details');  
    expect(details).toBeInTheDocument();
    
    button = EventComponent.queryByText('Hide Details'); 
    await user.click(button); 
    details = EventComponent.container.querySelector('.details');  
    expect(details).not.toBeInTheDocument(); 
  });

 }); 