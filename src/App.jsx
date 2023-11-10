import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import * as dateFnsLocale from "date-fns/locale/en-US";
import moment from "moment/moment";
import styled from "styled-components";
import "./App.css";

let locale = dateFnsLocale;

const locales = {
  "en-US": locale
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title: "Wedding Ceremony",
    allDay: true,
    start: new Date(2023, 10, 2),
    end: new Date(2023, 10, 4)
  },
  {
    title: "Practice coding",
    allDay: true,
    start: new Date(2023, 10, 10),
    end: new Date(2023, 10, 10)
  },
  {
    title: "Driving Lessons",
    // allDay: true,
    start: new Date(2023, 10, 13),
    end: new Date(2023, 10, 15)
  },
  {
    title: "Vacation",
    allDay: true,
    start: new Date(2023, 10, 25),
    end: new Date(2023, 10, 31)
  },
];


const App = () => {
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""});
  const [allEvents, setAllEvents] = useState(events);

  //spread the current event and append to new event
  const handleEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="App">
      <StyledHeading>REACT CALENDAR APP</StyledHeading>
      <StyledSubHeading>Add New event</StyledSubHeading>

      <div>
        <TextInput 
          type="text" 
          placeholder="Add title" 
          value={newEvent.title} 
          onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
        />
      </div>

      <Calendar 
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{height:500, margin: "50px"}}
      />
    </div>
  )
}

export default App;

const StyledHeading = styled.h2`
  color: #c24040;
  font-size: 30px;
  font-family: sans-serif;
  font-weight: 800;
`;
const StyledSubHeading = styled.h2`
  color: #f5481d;
  font-size: 25px;
  font-family: 'Open Sans', sans-serif;
   font-size: 26px; 
   font-weight: 600;
`;

const TextInput = styled.input`
  width: 20%;
  margin-right: 10px;
`;