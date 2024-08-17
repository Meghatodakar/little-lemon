import React, { useState } from "react";

function BookingForm(props) {
  const { slots, updateTimes } = props;
  const [formState, setFormState] = useState({
    date: "",
    time: "",
    noOfGuests: 0,
    occasion: "",
  });
  const handleFormSumit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  const handleChange = (e) => {
    if (e.target.id === "res-date") {
      updateTimes(e.target.value);
      setFormState({ ...formState, date: e.target.value });
    }
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleFormSumit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={formState.date}
        onChange={handleChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time ">
        {slots?.map((value) => (
          <option key={value}>{value}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={formState.noOfGuests}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
