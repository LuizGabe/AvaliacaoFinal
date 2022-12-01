import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './add';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/adicionar" element={<Add />} />
    </Routes>
  </BrowserRouter>
);
