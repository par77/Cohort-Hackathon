import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Register from './components/Register'
import Nav from './components/Nav'
import Participants from './components/Participants'

const App = () => {

  return (
    <>
    <Nav />
    <Routes>
      <Route path='' element = {<Main />} />
      <Route path='/register' element={<Register />} />
      <Route path='/participants' element={<Participants/>} />
    </Routes>
    </>
  )
}

export default App