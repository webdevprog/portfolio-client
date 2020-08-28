import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Login from './components/admin/Login/Login';
import AdminMainPage from './components/admin/Main/Main';
import withLoginPage from './hoc/withLoginPage';
import withAdminPage from './hoc/withAdminPage';
const admin = true;
function App(props) {
  return (
    <div className="App">
        <Route path="/admin" render={AdminMainPage} />
    </div>
  );
}
export default App;
