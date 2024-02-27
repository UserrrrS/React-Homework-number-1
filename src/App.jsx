import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Exercises from "./pages/Exercises"
import Homework from "./pages/Homework"
import Learning from "./pages/Learning"
import Monitoring from "./pages/Monitoring"
import Platform from "./pages/Platform"
import Schedule from "./pages/Schedule"


export default () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercises" element={<Exercises/>}/>
        <Route path="/homework" element={<Homework/>}/>
        <Route path="/learning" element={<Learning/>}/>
        <Route path="/monitoring" element={<Monitoring/>}/>
        <Route path="/platform" element={<Platform/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
      </Routes>
    </BrowserRouter>
  </>
}