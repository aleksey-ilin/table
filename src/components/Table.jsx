import React from 'react';
import './Table.css';

const Table = () => (
  <div className="table">
    <div className="thead">
      <div className="numTask">
        <button className="newTask">+</button>
        <div className="num">№</div>
      </div>
      <div className="task">Task</div>
      <div className="plan">Plan</div>
      <div className="fact">Fact</div>
      <div className="percent">%</div>
      <div className="forecast">Forecast</div>
    </div>
  </div>
);

export default Table;