import React from "react";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import './App.css';
import PayrollForm from "./components/payroll-form";
import Home from "./components/home"

function App() {
  return (
    <div >
  
      <Router>
          <Switch>
          <Route exact path="/"><PayrollForm/></Route>
          <Route path="/home"><Home/></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;