import React from 'react'
import {Route, Routes} from "react-router-dom"
import Firstpage from './Pages/Firstpage'
import "./Fonts/WEB/css/satoshi.css"
import Cbtpreview from './Pages/Cbtpreview'
import Cbttest from './Pages/Cbttest'
import Cbtexam from './Pages/Cbtexam'
import Newcbt from './Pages/Newcbt'
import Calender1 from './Pages/Calender1'
import Calender2 from './Pages/Calender2'
import Calender3 from './Pages/Calender3'




const App = () => {
  return (
  <Routes>
    <Route path='/firstpage' element={<Firstpage/>}></Route>
    <Route path='/cbtpreview' element={<Cbtpreview/>}></Route>
    <Route path='/cbttest' element={<Cbttest/>}></Route>
    <Route path='/cbtexam' element={<Cbtexam/>}></Route>
    <Route path='/newcbt' element={<Newcbt/>}></Route>
    <Route path='/calender1' element={<Calender1/>}></Route>
    <Route path='/calender2' element={<Calender2/>}></Route>
    <Route path='/calender3' element={<Calender3/>}></Route>
    </Routes>
  )
}

export default App
