import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees';

export const getEmployees = async () => {
     return await axios.get(EMPLOYEE_API_BASE_URL);
    }

export const createEmployee = async (employee) => {
    return await axios.post(EMPLOYEE_API_BASE_URL, employee);
}

export const getEmployeeById = async (employeeId) => {
    return await axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
}

export const updateEmployee = async (employee, employeeId) => {
    return await axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
}

