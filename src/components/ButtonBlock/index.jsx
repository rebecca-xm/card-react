import React from 'react';
import './style.css';

const ButtonBlock = ({ addtocart }) => (
    <div className='card__btn'>
        <button className='btn'>{addtocart}</button>
    </div>
)

export default ButtonBlock