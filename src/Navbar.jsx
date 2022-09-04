import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "@frontegg/react";

export default function Navbar() {
  const { isAuthenticated } = useAuth();
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to={isAuthenticated?"/about":"/"}>Login</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={isAuthenticated?"/about":"/"}>home</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>


<Outlet/>
</>
  )
}
