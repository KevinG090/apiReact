import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import GetData from './components/GetData';

function App() {

  const [usuarios, setUsuarios] = useState([''])
  // const [est, setEst] = useState(0)

  const getData = async() => {
    const res = await axios.get(`https://reqres.in/api/users?page=2`)
    const response =await res.data.data
    setUsuarios(response)    
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
      <h1>Lista De Usuarios</h1>
      <GetData usuarios={usuarios}/>
    </div>
  )
}

export default App
