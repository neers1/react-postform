import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const DepartmentForm = (props) => {
    const [depName, setDepName] = useState('');
    const [teamId, setTeamId] = useState('');

     const formSubmitted = (event)=>{
        event.preventDefault();
        let dept = {
            "id" : 101, 
            "dep_name"  : depName,
            "team_id" : teamId
        }
        console.log(dept);
        props.submitForm(dept);
     }

  return (
    <Form onSubmit={formSubmitted}>
  <Form.Group className="mb-3" controlId="formDeptName">
    <Form.Label>Department Name:</Form.Label>
    <Form.Control type="text" placeholder="Department Name"
     value = {depName}
    onChange = {(event)=> setDepName(event.target.value)}
     />    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formTeamId">
    <Form.Label>Team Id</Form.Label>
    <Form.Control type="text" placeholder="Team ID" 
    value={teamId}
    onChange={(event)=>setTeamId(event.target.value)}
    />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  );
}

export default DepartmentForm