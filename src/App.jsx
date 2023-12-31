import * as dateFnsLocale from "date-fns/locale/en-US";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
// import moment from "moment/moment";
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
  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
    toast.success('Event added successfully!');
  }

  return (
    <div className="App">
      <Toaster 
        toastOptions={{
          className: '',
          style: {
            fontFamily: "sans-serif",
            color: '#713200',
          },
        }}
      />
      
      <StyledHeading>REACT CALENDAR APP</StyledHeading>
      
      <StyledSubHeading>Add New event</StyledSubHeading>
      <InputWrapper>
        <TextInput
          type="text"
          placeholder="Add title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
        />
        <br />
        <ReactDatePicker
          placeholderText="Start Date"
          style={{Marginright: "10px"}}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({...newEvent, start})}
        />
        <ReactDatePicker
          placeholderText="End Date"
          style={{Marginright: "10px"}}
          selected={newEvent.end}
          onChange={(end) => setNewEvent({...newEvent, end})}
        />
        <SubmitButton type="submit" onClick={handleAddEvent}>
          Add Event
        </SubmitButton>
      </InputWrapper>
      
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
   font-size: 28px; 
   font-weight: 600;
   text-align: center;
`;

const TextInput = styled.input`
  width: 20%;
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  display: inline-block;
  width: 100px;
  height: 25px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color:#000000;
    font-weight: 700;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;