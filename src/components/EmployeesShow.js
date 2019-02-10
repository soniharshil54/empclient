import React,{Component} from "react"
import {
Table, Button
} from "reactstrap"


class EmployeesShow extends Component{

    state = {
        employeesdata: []
    }

    componentDidMount(){
        fetch("http://localhost:5000/api/employees")
        .then(res=>res.json())
        .then(employees => 
            this.setState({employeesdata:employees})
            )
    }

    handleClick = userId => {
        const requestOptions = {
          method: 'DELETE'
        };
      
        // Note: I'm using arrow functions inside the `.fetch()` method.
        // This makes it so you don't have to bind component functions like `setState`
        // to the component.
        fetch("http://localhost:5000/api/employees/" + userId, requestOptions).then((response) =>(response.json())
        ).then((result) => console.log(result));
      }

    render(){
        const {employeesdata} = this.state

        return(
            <div>
                 <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Employee Name</th>
                        <th>Contact</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Date of join</th>
                        <th>Gender</th>
                        <th>Delete</th>
                       
                    </tr>
                    </thead>
                    <tbody>

                     {
                         employeesdata.map((employee)=>(
                            <tr>
                                <th scope="row">1</th>
                                <td>{employee.emp_name}</td>
                                <td>{employee.emp_contact}</td>
                                <td>{employee.emp_department}</td>
                                <td>{employee.emp_designation}</td>
                                <td>{employee.emp_joindate}</td>
                                <td>{employee.emp_gender}</td>
                                <td><button onClick={() => { this.handleClick(employee._id) }}>delete</button></td>
                               
                            </tr>
                         ))

                         
                     }   
                    
                    </tbody>
                </Table>
            </div>
        )

    }
}

export default EmployeesShow