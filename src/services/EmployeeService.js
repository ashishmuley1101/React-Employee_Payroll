import axios from "axios";

class EmployeeService {
    baseUrl = "http://localhost:8080";

    createEmployee(data) {
       console.log(data);
      return axios.post(`${this.baseUrl}/create`,data);
    }
    
  }
  export default new EmployeeService();