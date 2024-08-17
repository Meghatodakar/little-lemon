import React, { useEffect, useState } from "react";
import BookingForm from "./BookingPage/BookingForm";

function Main() {
  const [slots, setSlots] = useState([]);

  const updateTimes = (date) => {
    const result = fetchAPI(new Date(date));
    setSlots(result);
  };

  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  return (
    <main>
      <BookingForm updateTimes={updateTimes} slots={slots} />
    </main>
  );
}

export default Main;
