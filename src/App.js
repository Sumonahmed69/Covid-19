import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import Services from "./components/Home/Seriveces/Services";
import Login from './components/Login/Login/Login';
import Blog from './components/Blog/Blog';
import Dashboard from './components/Dashboard/Deshboard/Dashboard';
import Appointment from './components/Appointment/Appointment/Appointment';
import Admin from './components/Admin/Admin/Admin';
import Oderlist from './components/Admin/Oderlist/Oderlist';
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import AddService from './components/Admin/AddService/AddService';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';



export const UserContext = createContext();

function App() {
const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[ loggedInUser, setLoggedInUser]}>
       
    <Router >
    
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/appointment">
          <Appointment />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>      
        <PrivateRoute path="/Dashboard">
          <Dashboard />
        </PrivateRoute>      
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>      
        <Route path="/oderlist">
          <Oderlist />
        </Route>      
        <Route path="/makeAdmin">
          <MakeAdmin />
        </Route>      
        <Route path="/addService">
          <AddService />
        </Route>      
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
     </UserContext.Provider >
  );
}

export default App;
