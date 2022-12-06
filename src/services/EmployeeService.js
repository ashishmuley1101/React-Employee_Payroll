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

  }
  export default new EmployeeService();