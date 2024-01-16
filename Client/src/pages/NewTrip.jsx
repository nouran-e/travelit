import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Form.scss';
import '../styles/NewTrip.scss';
import ButtonPrimary from '../components/Button';
import { Container } from '@mui/material';
import AppHeader from '../components/AppHeader';
import '../styles/itinerary.scss';

function NewTrip() {
  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    tripStart: '',
    tripEnd: '',
    img: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, img: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use FormData to send files
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('destination', formData.destination);
      formDataToSend.append('tripStart', formData.tripStart);
      formDataToSend.append('tripEnd', formData.tripEnd);
      formDataToSend.append('img', formData.img);

      // Axios request to server API endpoint
      const response = await axios.post('/api/trips', formDataToSend);

      // Handle success or other logic
      console.log('Response from server:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error posting data:', error);
    }
  };

    return (
        <>
         <AppHeader />
       
        <Container className="form-container">
            <h1 className="headingTrip">Plan your next trip</h1>
        <form className="form-primary" onSubmit={handleSubmit}>
            <label htmlFor="tripName">Trip name</label>
            <input id="tripName" value={formData.name}
            onChange={handleInputChange} placeholder="E.g. Morroco trip 2023" name="name" type="text" required />
            <label htmlFor="destination">Destinaion(s)</label>
            <input id="destination" value={formData.destination}
            onChange={handleInputChange} placeholder="E.g. Morroco, Algeria, Tunis" name="destination" type="text" />
            <label htmlFor="startDate">Start date</label>
            <input id="startDate" value={formData.startDate}
            onChange={handleInputChange} name="tripStart" type="date" required />
            <label htmlFor="endDate">End date</label>
            <input id="endDate" value={formData.endDate}
            onChange={handleInputChange} name="tripEnd" type="date" required />
            <label htmlFor="img">Select image:</label>
            <input type="file" id="img"  value={formData.img}
            onChange={handleInputChange}name="img" onChange={handleFileChange} accept="image/png, image/jpeg"></input>
            <ButtonPrimary type="submit" btnClass={'button-primary button-blue'} btnText={'Create trip'} />
        </form>
        </Container>
      </>
    );
}

export default NewTrip;