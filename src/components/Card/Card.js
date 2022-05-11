import React, { Component }  from 'react';

import './Card.css';

function Card(props) {
    return (
      <div className='card-container'>
        <div>{props.value}</div>
        <div>{props.title}</div>
      </div>
    );
  }
  
export default Card;