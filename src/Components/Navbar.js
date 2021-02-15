import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">Bank</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/customers">Customers <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/history">Transaction History<span class="sr-only">(current)</span></Link>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar
