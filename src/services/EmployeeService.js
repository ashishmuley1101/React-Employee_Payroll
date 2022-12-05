import axios from "axios";

// Use Case 3 creating the Service class importing the Axios Lib.

class EmployeeService {
    baseUrl = "http://localhost:8080";

    createEmployee(data) {
       console.log(data);
      return axios.post(`${this.baseUrl}/create`,data);
    };

  }
  export default new EmployeeService();