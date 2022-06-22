import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const redColor = {
      backgroundColor: 'pink',
      color: 'aqua'
    };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} customcolorclass`}
      style= {redColor}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.dropdown}
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* <div class="btn-group mx-4" role="group" aria-label="Basic example">
          <button type="button"onClick={props.toggleRed}  class="btn csbtnred ">Reddish Dark mode</button>
          <button type="button"onClick={props.toggleMode} class="btn csbtngreen">Greenish Dark mode</button>
          <button type="button"onClick={props.toggleMode} class="btn csbtnblue">Bluish Dark mode</button>
        </div> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input
            className="form-check-input"
            type="checkbox" 
            onClick={() => {props.toggleMode('dark')}}
            role="switch"
            id="flexSwitchCheckDefault"
            style={{cursor:'pointer'}}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark mode
          </label>
        </div>
        <div className="bg-primary rounded mx-2" onClick={props.toggleBlue} style={{height:"30px", width:"30px", border:'1px solid white', cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={props.toggleGreen} style={{height:"30px", width:"30px" ,border:'1px solid white', cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={props.toggleRed} style={{height:"30px", width:"30px", border:'1px solid white', cursor:'pointer'}}></div>
        {/* <div className="bg-dark rounded mx-2" onClick= { () => {props.toggleMode('primary')}} style={{height:"30px", width:"30px", border:'1px solid white'}}></div> */}

      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  dropdown: PropTypes.string,
};
