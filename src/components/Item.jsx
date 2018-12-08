import React from 'react';
import './Item.css';

export default class Item extends React.Component {
  
  removeTask = () => {
    const { children } = this.props;
    console.log(children)
  };
  
  render() {
    return (
      <div className="item">
        <div className="numTask">
          <button className="newTask" onClick={this.removeTask}>-</button>
          <div className="num">{ /*children*/ }</div>
        </div>
        <div className="task">Task { /*children*/ }</div>
        <div className="plan">10</div>
        <div className="fact">10</div>
        <div className="percent">100 %</div>
        <div className="forecast">0</div>
      </div>
    );
  }
};
