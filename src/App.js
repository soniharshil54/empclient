import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeAdd from "./components/EmployeeAdd"
import EmployeesShow from "./components/EmployeesShow"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EmployeeAdd />
        <EmployeesShow />
      </div>
    );
  }
}

export default App;
