import axios from "axios";

const SPRING_BASE_URL = "http://localhost:8080/empmgn/employees";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(SPRING_BASE_URL, employee);
  }

  getEmployees() {
    return axios.get(SPRING_BASE_URL);
  }

  deleteEmployee(id) {
    return axios.delete(SPRING_BASE_URL + "/" + id);
  }

  getEmployeeById(id) {
    return axios.get(SPRING_BASE_URL + "/" + id);
  }

  updateEmployee(employee, id) {
    return axios.put(SPRING_BASE_URL + "/" + id, employee);
  }
}

export default new EmployeeService();
