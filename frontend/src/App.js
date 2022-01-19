import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';


function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path = "/" exact element = {<ListEmployeeComponent/>}/>
            <Route path = "/employees" element = {<ListEmployeeComponent/>}/>
            <Route path = "/add-employee/:id" element = {<CreateEmployeeComponent/>}/>
           
            {/* <Route path = "/update-employee/:id" element = {<UpdateEmployeeComponent/>}/> */}
          </Routes> 
        </div>
      </Router>
    </div>
  );
}

export default App;
