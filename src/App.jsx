import React from 'react';
import {Route, Routes} from 'react-router-dom';
import '../dist/output.css';

//Components
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
//import Nav
function App() {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Home />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
    </div>
  )
}

export default App
