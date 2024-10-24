import React, { useState } from 'react';
import "./TripItem.css"

export function TripItem({ trip, editTrip, removeTrip }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTrip, setUpdatedTrip] = useState(trip);

    const handleEditChange = (e) => {
        
        if (name === "activities") {
            setUpdatedTrip({ ...updatedTrip, [name]: value.split(',').map(activity => activity.trim()) });
        } else {
            setUpdatedTrip({ ...updatedTrip, [name]: value });
        }
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        editTrip(updatedTrip);
        setIsEditing(false);
    };

    return (
        <div className=" Details-container">
            {isEditing ? (
                <form onSubmit={handleUpdate} className='details-card'>
                    <h1>Editar Viagem</h1>
                     <div className="details-group">
                        <label htmlFor="destination">Destino: </label>
                    <input
                        type="text"
                        name="destination"
                        value={updatedTrip.destination}
                        onChange={handleEditChange}
                        required
                    />
                    </div>
                    <div className="details-group">
                        <label htmlFor="startDate">Inicio: </label>
                    <input
                        type="date"
                        name="startDate"
                        value={updatedTrip.startDate}
                        onChange={handleEditChange}
                        required
                    />
                    </div>

                    <div className="details-group">
                        <label htmlFor="endDate">Fim:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={updatedTrip.endDate}
                        onChange={handleEditChange}
                        required
                    />
                    </div>

                    <div className="details-group">
                        <label htmlFor="Activies">Atividadea</label>
                    <textarea
                        name="activities"
                        value={updatedTrip.activities.join(', ')}
                        onChange={handleEditChange}
                        required
                    />
                    </div>
                    <div className="details-group buttonForm">
                    <button className='update-btn' type="submit">Atualizar</button>
                    <button className='cancel-btn' type="button" onClick={() => setIsEditing(false)}>Cancelar</button>
                    </div>
                </form>
            ) : (
                <div className='trip-item'>
                    <h3>Destino: {trip.destination}</h3>
                    <p>Data de Início: {trip.startDate}</p>
                    <p>Data de Fim: {trip.endDate}</p>
                    <p className="activities">Atividades: {trip.activities.join(', ')}</p>
                    <button className='edit-btn' onClick={() => setIsEditing(true)}>Editar</button>
                    <button className='remove-btn' onClick={() => removeTrip(trip.id)}>Remover</button>
                </div>
            )}
        </div>
    );
}

export default TripItem