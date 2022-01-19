import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {getEmployees} from '../services/EmployeeService'

const ListEmployeeComponent = () => {

  const[employees, setEmployees] = useState(null);

  useEffect( async () => {
    
      const data = await getEmployees();
      console.log(data.data);
      setEmployees(data.data);
      
  },[])

  let navigate = useNavigate();
  const addEmployee = () => {
    navigate('/add-employee');
  }

  const editEmployee = (id) => {
    navigate(`/update-employee/${id}`);
  }

  return (
     <div>
         <h2 className='text-center'>Employees List</h2>
         <div className='row'>
             <button className="btn btn-primary" onClick={addEmployee}> Add Employee</button>
        <div/>
            <table className='table table-striped table-bordered'>
                 <thead>
                     <tr>
                         <td>Employee First Name</td>
                         <td>Employee Last Name</td>
                         <td>Employee Email</td>
                         <td>Actions</td>
                     </tr>
                 </thead>
                 <tbody>
                     {employees && employees.map(
                            employee => 
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                  <button onClick={ () => editEmployee(employee.id)} className="btn btn-info">Update </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>

  );
};

export default ListEmployeeComponent;


