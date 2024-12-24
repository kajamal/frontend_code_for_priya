// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Contactus from './components/Contactus';  // Corrected import statement

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/products" element={<Products />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
