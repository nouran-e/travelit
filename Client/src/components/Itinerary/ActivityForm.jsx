import { useState } from 'react';
import ButtonPrimary from '../Button';
import '../../styles/Form.scss';
import axios from 'axios';

export default function ActivityForm () {
    const url = "http://localhost:5173/api/activities";
    const [activityData, setActivityData] = useState({
        activity: "",
        location: "",
        date: "",
        startTime: "",
        endTime: "",
    })

    const handleInput = (e) =>{
        setActivityData({...activityData, [e.target.id]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
   
        axios.post(url, activityData )
        .then((res) => {
            console.log(res.data)
            console.log('Full Response:', res);
    console.log('Response Data:', res.data);
        })
        .catch(function (error) {
            console.log(error);
          }) 
    }
    return (
        <>
        <form className="form-primary" onSubmit={handleSubmit}>
            <label name="ActivityTitle">Activity Title
                <input onChange={handleInput} value={activityData.activity} id="activity" placeholder="E.g. Cruise" name="ActivityTitle" type="text" required />
            </label>
            <label name="Location">Location
                <input onChange={handleInput} value={activityData.location} id="location" placeholder="E.g. Woodhill" name="ActivityLocation" type="text" required/>
            </label>

            <label name="Date">Date
                <input onChange={handleInput} value={activityData.date} id="date" name="ActivityDay" type="date" required/>
            </label>

            <label name="StartTime">Start Time
                <input onChange={handleInput} value={activityData.startTime} id="startTime" name="StartTime" type="time" required/>
            </label>

            <label name="EndTime">End Time
                <input onChange={handleInput} value={activityData.endTime} id="endTime" name="EndTime" type="time" required/>
            </label>

            <ButtonPrimary btnClass={'button-primary button-blue'} btnText={'Save'}  />
        </form>
        </>
    )
}