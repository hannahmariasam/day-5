import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ViewStudent = () => {
  var [stu,setStu]= useState([])
  var navigate = useNavigate();
  // useEffect(()=>{},[])
  useEffect(()=>{
    axios.get("http://localhost:3000/view")
    .then((res) =>{
      console.log(res);
      setStu(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  const delStu=(id)=>{
    console.log(id);
    axios.delete(`http://localhost:3000/${id}`)
    .then((res) => {
      console.log(res);
      alert(res.data)
      // to automatically load page
      window.location.reload()
    })
    .catch((err)=>{
      console.log(err)

    })
  }
  const updateStu=(val)=>{
    console.log(val);
    navigate("/add",{state:{val}})
    
    
  }
  return (
    <div >
      
      <TableContainer sx={{border:'1px solid black'}}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>NAME</TableCell>
                    <TableCell>PLACE</TableCell>
                    <TableCell>AGE</TableCell>
                    <TableCell>DEPARTMENT</TableCell>

                </TableRow>
                  </TableHead>
                <TableBody>
                  {stu.map((val,i)=>{
                    return(
                      <TableRow>
                        <TableCell>{val.Name}</TableCell>
                        <TableCell>{val.Place}</TableCell>
                        <TableCell>{val.Age}</TableCell>
                        <TableCell>{val.Department}</TableCell>
                        <TableCell>
                          {/*we call the function as call back function ()=>{},curly brackets indicate call back function  */}
                          <Button variant='contained' color='error' onClick={()=>{delStu(val._id)}}>Delete</Button>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' color='success' onClick={()=>{updateStu(val)}}>Update</Button>
                        </TableCell>
                      </TableRow> 
                      );
                  })}

                </TableBody>
          
           
        </Table>
      </TableContainer>
    </div>
  )
}

export default ViewStudent
