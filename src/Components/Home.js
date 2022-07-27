import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="container mt-4">
        {/* <button className="btn btn-primary">sdfsdf</button> */}
        <h1 className='display-1 text-center mb-5 text-decoration-underline'>My Apps</h1>
        <div className="row">
            <Link to='/TicTacToe' className="m-2 col btn btn-danger fs-1 p-5" style={{minWidth: "340px"}}>Tic-Tac-Toe</Link>
            <Link to='/ToDoList' className="m-2 col btn btn-primary fs-1 p-5" style={{minWidth: "340px"}}>To-Do-List</Link>
            {/* <Link to='/' className="m-2 col btn btn-dark fs-2 p-5" style={{minWidth: "200px"}}>To-Do-List</Link> */}
        </div>
        {/* <div className="row">
            <Link to='/' className="m-2 col btn btn-secondary fs-2 p-5" style={{minWidth: "200px"}}>News App</Link>
            <Link to='/' className="m-2 col btn btn-warning fs-2 p-5" style={{minWidth: "200px"}}>Pension Management</Link>
            <Link to='/' className="m-2 col btn btn-success fs-2 p-5" style={{minWidth: "200px"}}>Instagram Clone</Link>
        </div> */}
    </div>
  )
}
