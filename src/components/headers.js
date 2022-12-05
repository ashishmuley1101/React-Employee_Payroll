import { Component } from "react";
import logo from "../assets/images/logo.png";
import "./home.scss";
import "./payroll-form.scss";


class Headers extends Component {
    render(){
        return(
            <div>
            <header className="header-content header">
                <div className="logo-content">
                    <img src={logo} alt="logo"/>
                    <div>
                        <span className="emp-text">EMPLOYEE</span>
                        <br />
                        <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
            </header>
            </div>
        )
        }
    }

export default Headers;