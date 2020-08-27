import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Login from './components/admin/Login/Login';
import AdminMainPage from './components/admin/Main/Main';
import withLoginPage from './hoc/withLoginPage';
import withAdminPage from './hoc/withAdminPage';
const admin = true;
function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/admin" render={() => withLoginPage(AdminMainPage, admin)} />
        <Route path="/login" render={() => withAdminPage(Login, admin)} />
      </BrowserRouter>
    </div>
  );
}
export default App;
