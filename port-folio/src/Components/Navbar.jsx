import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">SandipG</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/resume">Resume</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/portfolio">Portfolio</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar