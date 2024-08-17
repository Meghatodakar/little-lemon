import React from "react";
import { useState } from "react";

const BookingForm = (props) => {

   const [type, setType] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("")

   const handleSumbit = (e) => {
   e.preventDefault();
   props.submitForm(e);
   };

   const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

  return (
    <header>
      <section>
        <form onSubmit={handleSumbit}>
          <fieldset>
            <div>
              <label htmlFor="reservetion-date">Choose Date</label>
              <input id="reservetion-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
            </div>
            <div>
              <label htmlFor="reservetion-time">Choose Time</label>
              <select id="reservetion-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option value="">Select a Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
              </select>
            </div>
            <div>
              <label htmlFor="reservetion-guests">Number of Guests</label>
              <input id="reservetion-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
            </div>
            <div>
              <label htmlFor="reservetion-occasion">Occasion</label>
              <select id="reservetion-occasion" key={type} value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div>
              <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"}></input>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
