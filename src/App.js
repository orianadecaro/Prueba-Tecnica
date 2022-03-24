import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './feature/Home/Home';
import Ejercicio1 from './feature/Ejercicio1/Ejercicio1';
import Ejercicio2 from './feature/Ejercicio2/Ejercicio2';
import Ejercicio3 from './feature/Ejercicio3/Ejercicio3';
import Ejercicio4 from './feature/Ejercicio4/Ejercicio4';
import Ejercicio5 from './feature/Ejercicio5/Ejercicio5';
import Ejercicio6 from './feature/Ejercicio6/Ejercicio6';

function App() {
    return(
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/ejercicio1" element={<Ejercicio1/>}/>
            <Route path="/ejercicio2" element={<Ejercicio2/>}/>
            <Route path="/ejercicio3" element={<Ejercicio3/>}/>
            <Route path="/ejercicio4" element={<Ejercicio4/>}/>
            <Route path="/ejercicio5" element={<Ejercicio5/>}/>
            <Route path="/ejercicio6" element={<Ejercicio6/>}/>
          </Routes>
      </Router>
    )
}

export default App;