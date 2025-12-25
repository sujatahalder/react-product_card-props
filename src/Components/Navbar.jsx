import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className='navbar-brand' to="/">Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/service">Service</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                        </li>
                        <li className="nav-item">
                        <Link  className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </>
  )
}

export default Navbar