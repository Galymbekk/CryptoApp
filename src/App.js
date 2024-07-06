import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import CryptoLanding from "./containers/CryptoLanding";

function App() {
  return (
    <Router>
      <Routes>
         <Route exact path="/" element={<CryptoLanding/>}/>
      </Routes>
    </Router>
  );
}

export default App;
