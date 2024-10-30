import React, { useState, useEffect } from 'react';
import { TripForm } from '../components/TripForm/TripForm';
import { TripList } from '../components/TripList.jsx/TripList';


import './FormList.css'

export  function FormList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    
    const storedTrips = JSON.parse(localStorage.getItem('trips')) || [];
    setTrips(storedTrips);
  }, []);

  useEffect(() => {
    
    localStorage.setItem('trips', JSON.stringify(trips));
  }, [trips]);

  const addTrip = (newTrip) => {
    setTrips([...trips, newTrip]);
  };

 
  const editTrip = (updatedTrip) => {
    setTrips(trips.map(trip => trip.id === updatedTrip.id ? updatedTrip : trip));
  };

  const removeTrip = (id) => {
    setTrips(trips.filter(trip => trip.id !== id));
  };

  return (
    <div className='view-details' >
     
     <div className=''>
      <TripForm addTrip={addTrip} />
      </div> 

      <div className='tripList'>
        <TripList trips={trips} editTrip={editTrip} removeTrip={removeTrip}/>
        </div> 
     
    </div>
  );
}

