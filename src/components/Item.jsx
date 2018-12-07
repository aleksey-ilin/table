import React from 'react';
import './Item.css';

const Item = () => (
  <div className="table">
    <div className="thead">
      <div className="num"></div>
      <div className="task"></div>
      <div className="plan"></div>
      <div className="fact"></div>
      <div className="percent"></div>
      <div className="forecast"></div>
    </div>
  </div>
);

export default Item;