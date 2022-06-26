import React from 'react'
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';
import logo from './android-chrome-512x512.png'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
      <ul className="navbar-nav mb-lg-0">
        <li className="nav-item d-flex">
        <img src={logo} className="rounded " style={{ width: 40, height: 40}} alt="logo" />
        <a className="navbar-brand nav-link active disabled " aria-current="page" href="/">TextPlay</a>
        </li>
     </ul>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active disabled" aria-current="page" href="/">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-a" to="/about">{props.aboutText}</a>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <ul className="navbar-nav me-auto mb-lg-0">
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckChecked" />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
          </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    // aboutText: PropTypes.string.isRequired
}


Navbar.defaultProps = {
    title : 'Set Title here',
    // aboutText : 'About'
}