import React from 'react';
import TripItem from '../TripItem/TripItem';
import "./TripList.css"


export function TripList({ trips, editTrip, removeTrip }) {

 
  return (
    <div className='viewTrip' >
      <h1 className='text-2xl py-5'>Ver as viagem marcadas: </h1>
      {trips.map(trip => (
        <TripItem
          key={trip.id}
          trip={trip}
          editTrip={editTrip}
          removeTrip={removeTrip}
        />
        
       
      ))}
      ***************************************
    </div>
  );
}

