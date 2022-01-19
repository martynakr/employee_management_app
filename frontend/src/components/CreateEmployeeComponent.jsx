import React, { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createEmployee } from '../services/EmployeeService';
import { getEmployeeById } from '../services/EmployeeService';

const CreateEmployeeComponent = () => {

  const empId = useParams();
  const numId = Number(empId.id);

  const [employee, setEmployee] = useState({
    id: numId,
    firstName: "",
    lastName: "",
    emailId: ""
  });


//   useEffect(async () => {

//     if(numId == -1){
//       return;
//     } else {
//       const data = await getEmployeeById(employee.id)
//       const empDetails = data.data;
//       console.log(empDetails, "data")
//       setEmployee({
//           id: numId,
//           firstName: empDetails.firstName,
//           lastName: empDetails.lastName,
//           emailId: empDetails.emailId
//       })
//     }
// }, [])

  let navigate = useNavigate();

  const changeFirstNameHandler = (event) => {
    setEmployee({firstName: event.target.value, lastName: employee.lastName, emailId: employee.emailId})
  }

  const changeLastNameHandler = (event) => {
    setEmployee({firstName: employee.firstName, lastName: event.target.value, emailId: employee.emailId})
  }

  const changeEmailIdHandler = (event) => {
    const email = event.target.value;
    setEmployee({firstName: employee.firstName, lastName:employee.lastName, emailId: email})
  }
  console.log(employee, "employee")

  const saveEmployee = async (event) => {
    event.preventDefault();
    let employeeData = {firstName: employee.firstName, lastName: employee.lastName, emailId: employee.emailId};
    console.log('employee => ' + JSON.stringify(employeeData));
    await createEmployee(employeeData);
    navigate('/employees')
  }


  const cancel = () => {
    navigate('/employees')
  }

  return (
    <div>
        <div className="container">
          <div className='row'>
            <div className = "card col-md-6 offset-md-3 offset-md-3">
              <h3 className='text-center'>Add Employee</h3>
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
                  <button className="btn btn-success" onClick={saveEmployee}>Save</button>
                  <button className="btn btn-danger" onClick={cancel}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>    
    </div>
    )
};

export default CreateEmployeeComponent;

