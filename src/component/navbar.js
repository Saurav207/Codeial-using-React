import React from 'react';
import { Link } from 'react-router-dom';

function navbar(props) {
  return (
    <nav className="nav">
      <div className="left-div">
        <Link to="/">LOGO</Link>
      </div>
      <div className="search-container">
        <img
          className="search-icon"
          src="https://image.flaticon.com/icons/png/512/64/64673.png"
          alt="icon"
        />
        <input placeholder="Search" />
        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://image.flaticon.com/icons/png/512/3135/3135715.png"
                alt="user-DP"
              />
              <span>Sanju</span>
            </li>
            <li className="search-results-row">
              <img
                src="https://image.flaticon.com/icons/png/512/3135/3135715.png"
                alt="user-DP"
              />
              <span>Sanju</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <img
            src="https://image.flaticon.com/icons/png/512/3135/3135715.png"
            alt="user-DP"
            id="user-dp"
          />
          <span>Sanju</span>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/logout">Log Out</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
