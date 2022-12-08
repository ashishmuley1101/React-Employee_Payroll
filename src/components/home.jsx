import React, { Component } from "react";
import "./home.scss";
import profile1 from "../assets/profile-images/Ellipse -3.png";
import profile2 from "../assets/profile-images/Ellipse -1.png";
import profile3 from  "../assets/profile-images/Ellipse -4.png";
import profile4 from "../assets/profile-images/Ellipse -9.png";
import edit from "../assets/icons/create-black-18dp.svg";
import deleteicon from "../assets/icons/delete-black-18dp.svg";
import { withRouter, Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";import { Button } from "@mui/material";
;

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employee: [],
        };

    }

    // Use case 6 Home Page Display All Employee Data.

    fetchData() {
        EmployeeService.findAllEmployee().then((response) => {
          //  console.log(response.data);
            this.setState({ employee: response.data.data });
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    // Use case 7 Remove Employee data from Employee Payroll Service 

    deleteEmployee(empId){
        console.log("employee id",empId);
        EmployeeService.deleteEmployee(empId);
        window.location.reload();
    }

    updateEmployee = (empId) => {
        console.log("Employee Id : ",empId)
        this.props.history.push(`PayrollForm/${empId}`);
    };

    render() {
        return (
            <div>
                
                <div>
                    <div className="main-content">
                        <div className="header-content employee-header">
                            <div className="emp-detail-text">
                                Employee Details
                                <div className="emp-count">{this.state.employee.length}</div>
                            </div>
                            <Link to="/" style={{textDecoration: 'none'}} >
                                <Button variant="contained" color='inherit' className="add-button">+ Add User</Button>
                            </Link>
                        </div>
                    
                     <div className="table-main">
                        <table id="table-display" className="table">
                            <thead>
                                <tr>
                                    <th>Profile Image</th>
                                    <th>Name</th>
                                    <th>Notes</th>
                                    <th>Gender</th>
                                    <th>Department</th>
                                    <th>Salary</th>
                                    <th>Start Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.employee && this.state.employee.map((employee) => (
                                    <tr key={employee.id}>
                                        <td>
                                            <img src={employee.profilePic === "../assets/profile-images/Ellipse -3.png" ? profile1 :
                                                employee.profilePic === "../assets/profile-images/Ellipse -1.png" ? profile2 :
                                                    employee.profilePic === "../assets/profile-images/Ellipse -4.png" ? profile3 : profile4
                                            } alt="ProfilePic" srcset="" /></td>
                                        <td>{employee.name}</td>
                                        <td>{employee.notes}</td>
                                        <td>{employee.gender}</td>
                                        <td>
                                            {employee.department.map(dep => <div className="dept-label" id="dept"> {dep} </div>)}
                                        </td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.startDate}</td>
                                        <td>
                                            <img onClick={() => this.deleteEmployee(employee.employeeId)} src={deleteicon} alt="delete"
                                                name={employee.id}/>
                                            <img onClick={() => {this.updateEmployee(employee.employeeId)}} src={edit}  alt="edit" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default withRouter(Home);