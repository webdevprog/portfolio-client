import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Login from './components/admin/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/admin" render={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
