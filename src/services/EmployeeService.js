import axios from "axios";

class EmployeeService {
    baseUrl = "http://localhost:8080";

    createEmployee(data) {
       console.log(data);
      return axios.post(`${this.baseUrl}/create`,data);
    }
    findAllEmployee() {
      return axios.get(`${this.baseUrl}/findAllEmployee`);
    }
    deleteEmployee = (id) => {
      return axios.delete(`${this.baseUrl}/deleteEmcreateployee/${id}`);
    };
    updateEmployee = (id, data) => {
      console.log(id);
      return axios.put(`${this.baseUrl}/updateEmployee/${id}`, data);
    };
    findEmployee = (id) => {
      console.log(id);
      return axios.get(`${this.baseUrl}/findEmployee/${id}`);
      
    };
  }
  export default new EmployeeService();