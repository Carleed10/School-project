import React from 'react'
import {Route, Routes} from "react-router-dom"
import Firstpage from './Pages/Firstpage'
import "./Fonts/WEB/css/satoshi.css"
import Cbtpreview from './Pages/Cbtpreview'
import Cbttest from './Pages/Cbttest'
import Cbtexam from './Pages/Cbtexam'
import Newcbttest from './Pages/Newcbttest'



const App = () => {
  return (
  <Routes>
    <Route path='/firstpage' element={<Firstpage/>}></Route>
    <Route path='/cbtpreview' element={<Cbtpreview/>}></Route>
    <Route path='/cbttest' element={<Cbttest/>}></Route>
    <Route path='/cbtexam' element={<Cbtexam/>}></Route>
    <Route path='/newcbttest' element={<Newcbttest/>}></Route>
    </Routes>
  )
}

export default App
