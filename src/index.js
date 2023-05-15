import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import DocumentEditor from './routes/DocumentEditor';
import LandingPage from './routes/LandingPage';
import Signup from './routes/Signup';
import Home from './routes/Home';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/DocumentEditor" element={<DocumentEditor />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
