import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ServicePage1 from './pages/BabysitterPage';
import ServicePage2 from './pages/ParalysisCarePage';
import ServicePage3 from './pages/PostnatalCare';
import ServicePage4 from './pages/NursePage';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<MainPage></MainPage>}></Route>
      <Route path="/babySitter" element={<ServicePage1></ServicePage1>}></Route>
       {/* <Route path="/edCare" element={<ServicePage2></ServicePage2>}></Route> */}
      <Route path="/paralysisCare" element={<ServicePage2></ServicePage2>}></Route>
       <Route path="/postnatalCare" element={<ServicePage3></ServicePage3>}></Route>
       <Route path="/Nurse" element={<ServicePage4></ServicePage4>}></Route> 
     </Routes>
    </div>
  
  );
}

export default App;
