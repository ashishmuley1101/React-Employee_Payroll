import React from "react";
import { BrowserRouter as Router, Switch,Routes,Route} from "react-router-dom";
import './App.css';
import PayrollForm from "./components/payroll-form";

function App() {
  return (
    <div >
      <Router>
          <Switch>
      
          <Route exact path="/"><PayrollForm/></Route>
          <Route path="/EmployeeForm/:id"><PayrollForm/></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;