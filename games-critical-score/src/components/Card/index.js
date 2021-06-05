import React, { Fragment } from 'react';
import logo from '../../game-images/witcher3.png';

import './style.css';

function index() {
  return (
    <div className="card-container">
      <h1 className="title">The Witcher 3</h1>
      <div className="game-content">
        <img className="game-image" src={logo} alt="The Witcher 3" />
        <ul className="info">
          <li className="score">93</li>
          <li className="category">PC</li>
          <li className="year">2015</li>
        </ul>
      </div>
    </div>
  );
}

export default index;
