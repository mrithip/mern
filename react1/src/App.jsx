import React from 'react'
import New from './components/New'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>

    {/* <New name ="RAUF" dept="CSE" skills={["eat","sleep","play"]}></New> */}
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/contact" Component={Contact}/>
      <Route path="/about" Component={About}/>
    </Routes>
    <Navbar/>
    </>
  )
}

export default App
