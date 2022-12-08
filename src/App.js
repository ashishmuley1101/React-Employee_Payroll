import React from "react";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import './App.css';
import PayrollForm from "./components/payroll-form";
import Home from "./components/home"
import Headers from "./components/headers";

function App() {
  return (
    <div className="App" >
     <Headers/>
      <Router>
          <Switch>
          <Route path="/home"><Home/></Route>
          <Route  exact path="/"><PayrollForm/></Route>
          <Route path="/PayrollForm/:empId"><PayrollForm/></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;