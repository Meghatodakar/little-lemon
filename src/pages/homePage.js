import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Feedback from "../components/feedback";
import Infos from "../components/infos";
import Booking from "./Booking";


const HomePage = () => {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    const initialState = {availableTimes:  availableTimes}
    const [state, dispatch] = useReducer(updateTimes, initialState);
    
    const submitAPI = function(formData) {
        console.log(formData)
        return true;
    };

    

    function updateTimes(state, date) {
        return {availableTimes: availableTimes}
    }
    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/completed")
        }
    }

    return(
        <main>
            <Routes>
                <Route path="/" element={<Infos />} />
                <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="/completed" element={<Feedback/> } />
            </Routes>
        </main>


    )
}

export default HomePage;