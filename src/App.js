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
import Admin from './components/Admin/Admin';
import Dashboard from './components/Dashboard/Deshboard/Dashboard';
import Appointment from './components/Appointment/Appointment/Appointment';


function App() {
  return (
    <Router>
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
        <Route path="/Dashboard">
          <Dashboard />
        </Route>      
        <Route path="/admin">
          <Admin />
        </Route>      
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
