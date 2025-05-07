import {  useNavigate } from "react-router-dom"
import "./Landing.css"
function Landing(){
    const navigate= useNavigate()

    const startPlanning = () =>{
        navigate("/formList")
    }
    return(
        <div id="image-bg" className="header">
        
        <div >
            
        <div id="container">
           <h1 id="text-title" c>TripPlanner: <br /> Sua Viagem, Sua Aventura</h1>
           <h3 class="text">Organize suas viagens com facilidade e estilo.</h3>
           <div className="action-buttons">
        <button className="start-planning-btn" onClick={startPlanning}>
          Start planning
        </button>
        <button className="get-app-btn rounded-full color-blue">Get the app →</button>
      </div>
        </div>
        
        </div></div>
    )
}

export default Landing
