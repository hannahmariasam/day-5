import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TextField, Typography } from '@mui/material'
import AddStudent from './components/AddStudent'
import ViewStudent from './components/ViewStudent'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <AddStudent/> */}
      {/* <ViewStudent/> */}
      <Navbar/>
      <Routes>
       <Route path="/add" element={<AddStudent/>}/>
       <Route path="/" element={<ViewStudent/>}/>
      </Routes>
      
    </>
  )
}

export default App
