import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home';
import Navbar from './navbar';
import Sports from './sports';
import { BrowserRouter, Routes, Route } from "react-router-dom";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Navbar/>
     <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="sports" element={<Sports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

