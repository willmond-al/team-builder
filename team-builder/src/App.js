import logo from './logo.svg';
import './App.css';
import Form from './Form';
import TeamMember from './TeamMember'
import React, { useState } from 'react';

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}


function App() {
  const [team, setTeam] = useState([])
  const [formValues, setFormValues] = useState([initialFormValues])

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues, 
      [inputName]:inputValue, 
    })
  }

  const submitForm = () =>{
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role:formValues.role, 
    }
    if(!newMember.name || !newMember.email || !newMember.role) return

    setTeam([newMember, ...team])
    setFormValues(initialFormValues)
  }

  
  return (
    <div className="container">
      <h1>Team Member List</h1>
        <Form
        values={formValues}
        update={updateForm}
        submit= {submitForm}/>
      </div>
  );
}

export default App;

     

