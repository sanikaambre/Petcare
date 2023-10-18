import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comp from './components/Comp';
import Registration from './components/Registration';
import './App.css';
import './Form.css';


function App() { 
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Comp />} />
      <Route path="/Registration" element={<Registration />} />
    </Routes>
    </BrowserRouter>
    
  );
}
export default App;