import React from 'react'
import Shortener from './components/Shortener'
import Navbar from './components/Navbar'
import QrGen from './components/qrGen'
import { Routes, Route } from "react-router-dom";
import About from './components/About';
function App() {
  return (
    <div className=''>
      <div className="absolute inset-0 -z-10 h-screen w-full bg-white [background:radial-gradient(110%_110%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <Navbar />
      <main className='flex justify-center items-center'>
        <Routes>
          <Route path="/" element={<Shortener />} />
          <Route path="/generator" element={<QrGen />} />
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App