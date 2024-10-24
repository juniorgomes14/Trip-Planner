import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'; 
import Landing from './pages/landing';
import { FormList } from './pages/Formlist';
import "./App.css";

function App() {
  

  return (
    <>
   
    
    <BrowserRouter>
      <div className="App flex">
  
        <nav>
        <NavLink to="/" title="Landing"></NavLink>
        <NavLink to="/FormList" title="FormList"></NavLink>
        
          
        </nav>
        <Routes>
         <Route exact path="/" element={<Landing />} />
         <Route path="/FormList" element={<FormList />} />
         
          
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;




