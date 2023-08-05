import { Route, Routes, useNavigate } from "react-router-dom"
import CustLayout from "./layouts/CustLayout"
import Login from "./layouts/pages/Login"
import SignUp from "./layouts/pages/SignUp"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./config/firebase"

function App() {

  // let navigate =  useNavigate()

  // onAuthStateChanged(auth, (user)=>{
  //   navigate('/')
  // })
  
  return (
      <Routes>
        <Route path='*' element={<CustLayout/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
  )
}

export default App
