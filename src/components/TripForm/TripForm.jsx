import React, { useState } from 'react';
import "./TripForm.css"


export function TripForm({ addTrip }) {

    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [activities, setActivities] = useState('');




    const Submeter = (e) => {
        e.preventDefault();
        if(startDate >endDate){
            alert("A data de inicio da viagem não pode ser maior que a data fim da viagem")
        }
        else{
        const newTrip = {
            id: Date.now(),
            destination,
            startDate,
            endDate,
            activities: activities.split(',').map(activity => activity.trim())
        };
        addTrip(newTrip);
        setDestination('');
        setStartDate('');
        setEndDate('');
        setActivities('');
    };

    }



    return (
        <div className="form-container flex">
            <form onSubmit={Submeter} className='form'>
            
                <h1 className='text-2xl'>Planejamento de Viagem</h1>
                <div className="form-group">
                    <label htmlFor="destination">Destination: </label>
                    <input
                        type="text"
                        placeholder="Destino"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Inicio: </label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">Fim: </label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    /></div>

                <div className="form-group">
                    <label htmlFor="activities">Acividades</label>
                    <textarea
                        placeholder="Atividades (separadas por vírgula)"
                        value={activities}
                        onChange={(e) => setActivities(e.target.value)}
                        required
                    /></div>
                <button type="submit" className='btn-submit'>Adicionar Viagem</button>
                
      
            </form>
        </div>
    );
}

