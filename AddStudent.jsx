import { TextField, Typography } from '@mui/material'
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'


const AddStudent = (props) => {
    var [inputs, setInputs]= useState({
      Name:"",
      Place:"",
      Age:"",
      Department:"",
      
    });
    var location = useLocation();
    var navigate = useNavigate();
    console.log("state",location.state);
    const inputHandler = (e)=>{
        setInputs({...inputs,[e.target.name]: e.target.value});
        console.log(inputs);
    }
    useEffect(() => {if(location.state!==null){
      setInputs({
        ...inputs,
         Name:location.state.val.Name,
         Place:location.state.val.Place,
         Age:location.state.val.Age,
         Department:location.state.val.Department,
      });
    }

    },[])
    const submitHandler=()=>{
      console.log("button clicked")
     if(location.state!==null){
      axios.put(`http://localhost:3000/${location.state.val._id}`,inputs)
      .then((res)=>{
        alert(res.data); 
        navigate('/');
      })
      .catch((err)=>{
        console.log(err);
      })
     }
     else{
       axios
      .post('http://localhost:3000',inputs)
      .then((res)=>{

        console.log(res);
        alert(res.data)
      })
      .catch((err)=>{
        console.log(err);
      })
     }
    }
  return (

    <div>
      <Typography variant='h2'>Welcome to Student Form</Typography>
      <TextField variant='outlined' label="Name"  onChange={inputHandler} name="Name" value={inputs.Name}/><br /><br />
      <TextField variant='outlined' label="Place" onChange={inputHandler} name="Place"value={inputs.Place}/><br /><br />
      <TextField variant='outlined' label="Age" onChange={inputHandler} name="Age" value={inputs.Age}/><br /><br />
      <TextField variant='outlined' label="Department" onChange={inputHandler} name="Department" value={inputs.Department}/><br /><br />
      <Button variant='contained'onClick={submitHandler}>Submit</Button>
      
    </div>
  )
}

export default AddStudent
