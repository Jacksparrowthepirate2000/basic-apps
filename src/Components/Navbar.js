import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand me-4" to="/">Abinash Apps</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/TicTacToe">Tic-Tac-Toe</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/ToDoList">To-Do-List</Link>
                        </li>
                    </ul>
                    {/* <div className='text-light me-3 fs-3'>Logout</div> */}
                </div>
            </div>
        </nav>
    )
}
