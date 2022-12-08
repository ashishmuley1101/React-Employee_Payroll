import axios from "axios";

// Use Case 3 creating the Service class importing the Axios Lib.
//  Use Case 4 CreateEmp method for storing back to Backend DB using Axios method.

class EmployeeService {
    baseUrl = "http://localhost:8080";

    createEmployee(data) {
       console.log(data);
      return axios.post(`${this.baseUrl}/create`,data);
    };

    findAllEmployee() {
      return axios.get(`${this.baseUrl}/getAllEmp`);
    }

    deleteEmployee(id) {
      return axios.delete(`${this.baseUrl}/delete/${id}`);
    };

   // Use Case 8 for updating the employee in Employee Payroll Service

    findEmployee(id) {
      return axios.get(`${this.baseUrl}/getEmpById/${id}`);
    };
    updateEmployee(id, data){
      return axios.put(`${this.baseUrl}/update/${id}`, data);
    };


  }
  export default new EmployeeService();