import { useEffect, useState } from 'react'

import './App.css'
import GetData from './components/GetData';
// import _, { take } from "lodash";

function App() {

  // const [paginatePosts, setPaginatePosts] = useState();
  // const [est, setEst] = useState(0)

  // const getData = async() => {
  //   const res = await axios.get(`https://reqres.in/api/users?page=2`)
  //   const response =await res.data.data
  //   setUsuarios(response)    
  // }

  

  return (
    <div className="App">
      <h1>Lista De Usuarios</h1>
      <GetData />
    </div>
  )
}

export default App
