import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployeeById , updateEmployee} from '../services/EmployeeService';

const UpdateEmployeeComponent = () => {

    const empId = useParams();
    const numId = Number(empId.id);

    const [employee, setEmployee] = useState({
      id: numId,
      firstName: "",
      lastName: "",
      emailId: ""
    });
  
    let navigate = useNavigate();

    useEffect(async () => {
        const data = await getEmployeeById(employee.id)
        const empDetails = data.data;
        console.log(empDetails, "data")
        setEmployee({
            id: numId,
            firstName: empDetails.firstName,
            lastName: empDetails.lastName,
            emailId: empDetails.emailId
        })
    }, [])
  
    const changeFirstNameHandler = (event) => {
      setEmployee({id: numId,firstName: event.target.value, lastName: employee.lastName, emailId: employee.emailId})
    }
  
    const changeLastNameHandler = (event) => {
      setEmployee({id: numId, firstName: employee.firstName, lastName: event.target.value, emailId: employee.emailId})
    }
  
    const changeEmailIdHandler = (event) => {
      const email = event.target.value;
      setEmployee({id: numId, firstName: employee.firstName, lastName:employee.lastName, emailId: email})
    }
    console.log(employee, "employee")
  
    const updateEmployee = async (event) => {
      event.preventDefault();
      let employeeData = {id: numId, firstName: employee.firstName, lastName: employee.lastName, emailId: employee.emailId};
      console.log('employee => ' + JSON.stringify(employeeData));
      console.log('id => ' + JSON.stringify(employeeData.id));
      await updateEmployee(employeeData, employeeData.id);
    //   navigate('/employees')
    }
  
  
    const cancel = () => {
      navigate('/employees')
    }
  
    return (
      <div>
          <div className="container">
            <div className='row'>
              <div className = "card col-md-6 offset-md-3 offset-md-3">
                <br/>
                <h3 className='text-center'>Update Employee</h3>
                <div className = "card-body">
                  <form>
                    <div className = "form-group">
                      <label> First Name: </label>
                      <input placeholder="First Name" name="firstName" className="form-control" value={employee.firstName} onChange={changeFirstNameHandler}/>
                    </div>
                    <div className = "form-group">
                      <label> Last Name: </label>
                        <input placeholder="Last Name" name="lastName" className="form-control" value={employee.lastName} onChange={changeLastNameHandler}/>
                    </div>
                    <div className = "form-group">
                      <label> Email Id: </label>
                      <input placeholder="Email Address" name="emailId" className="form-control" value={employee.emailId} onChange={changeEmailIdHandler}/>
                    </div>
                    <br/>
                    <button className="btn btn-success" onClick={updateEmployee}>Update</button>
                    <button className="btn btn-danger" onClick={cancel}>Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>    
      </div>
      )
  };
  
  export default UpdateEmployeeComponent;
