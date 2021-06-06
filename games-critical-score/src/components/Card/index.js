import React from 'react';

import './style.css';

function index({ name, image, year, category, score }) {
  return (
    <div className="card-container">
      <h1 className="card-title">{name}</h1>
      <div className="game-content">
        <img
          className="game-image"
          src={require(`./${image}.png`).default}
          alt={name}
        />
        <ul className="info">
          <li className="score">{score}</li>
          <li className="category">{category}</li>
          <li className="year">{year}</li>
        </ul>
      </div>
    </div>
  );
}

export default index;
