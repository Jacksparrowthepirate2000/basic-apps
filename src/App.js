import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Home from './Components/Home'
import TicTacToe from './Components/TicTacToe';
import ToDoList from './Components/ToDoList'

export default function App() {

  return (
    <BrowserRouter>

      <div className='font-monospace'>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TicTacToe" element={<TicTacToe />} />
          <Route path="/ToDoList" element={<ToDoList />} />
        </Routes>
        
      </div>

    </BrowserRouter>
  )
}
