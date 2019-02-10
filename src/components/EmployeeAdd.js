import React,{Component} from "react"
import {
    Modal,CustomInput, 
    ModalHeader,
    ModalBody,
    Col, Row, Button, Form, FormGroup, Label, Input, FormText

} from "reactstrap"


class EmployeeAdd extends Component{

  
      
        state = {
          modal: false,
          name:'',
          contact:'',
          department:'',
          designation:'',
          gender:'male',
          date:'',
          profile:''
        };
    
     onChange =(e) => {
         this.setState({
             [e.target.name] : e.target.value
         })
     }
    
    
      toggle = () => {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

      onSubmit = (e) => {

        e.preventDefault()
        const ename = this.state.name
        const econtact = this.state.contact
      
        const edesignation = this.state.designation
        const egender = this.state.gender
       
		
		
		const post = {
                    emp_name : ename,
                    emp_contact : econtact,
                    emp_department : "management",
                    emp_designation : edesignation,
                    emp_gender : egender
				}
				
				if(post){

                    console.log("post is there")
                    console.log(post)
				
			
					fetch('http://localhost:5000/api/employees',{
					 			method:"POST",
						headers:{
                                    'Accept': 'application/json',
					 				"content-type":"application/json"
						},
					 			body: JSON.stringify(post)
                                
					}).then((res)=> console.log(res)).catch((err)=>console.log(err))
    }
    
    this.toggle()
      }



    render(){
        return (
            <div>
              <Button color="primary" onClick={this.toggle}>Add Employee</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Add Employee</ModalHeader>
                <ModalBody>
                <Form onSubmit={this.onSubmit}>
                        <Row form>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="exampleEmail">Employee Name</Label>
                            <Input type="text" value={this.state.name} onChange={this.onChange} name="name" id="empName" placeholder="with a placeholder" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="examplePassword">Contact</Label>
                            <Input type="text" value={this.state.contact} onChange={this.onChange} name="contact" id="empContact" placeholder="password placeholder" />
                            </FormGroup>
                        </Col>
                        </Row>
                        <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCustomSelect">Department</Label>
                                <CustomInput onChange={this.onChange} type="select" id="empDep" name="department">
                                    <option value="">Select</option>
                                    <option>Management</option>
                                    <option>Sales</option>
                                    <option>Develper</option>
                                    
                                </CustomInput>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="examplePassword">Designation</Label>
                            <Input onChange={this.onChange} value={this.state.designation} type="text" name="designation" id="empDes" placeholder="Designation" />
                            </FormGroup>
                        </Col>
                        </Row>
                        <Row form>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="exampleCheckbox">Gender</Label>
                                <div>
                                    <CustomInput onChange={this.onChange} inline checked={this.state.gender === "male"} type="radio" value="male" id="empGen1" name="gender" label="Male" />
                                    <CustomInput onChange={this.onChange} inline checked={this.state.gender === "female"} type="radio" value="female" id="empGen2" name="gender" label="Female" />
                                    
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="exampleDate">Join Date</Label>
                                <Input onChange={this.onChange}
                                    value={this.state.date}
                                    type="date"
                                    name="date"
                                    id="empDate"
                                    placeholder="date"
                                />
                            </FormGroup>
                        </Col>
                        </Row>
                        <FormGroup>
                        <Label for="exampleCustomFileBrowser">Choose profile</Label>
                         <CustomInput onChange={this.onChange} type="file" id="exampleCustomFileBrowser" name="profile" label="choose profile picture" />
                        </FormGroup>
                       
                      
                        
                        <Button color="success">Add Employee</Button>
                    </Form>
                </ModalBody>
               
              </Modal>
            </div>
          );
    }
}

export default EmployeeAdd;