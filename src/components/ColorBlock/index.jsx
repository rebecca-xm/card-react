import React from 'react';
import './style.css';

const ColorBlock = ({ black, purple, yellow, green }) => (
    <div className='product__colors'>
    <label className='colors__label'>Colors</label>
        <div className='colors'>
            <div className='black'>{black}</div>
            <div className='purple'>{purple}</div>
            <div className='yellow'>{yellow}</div>
            <div className='green'>{green}</div>
        </div>
    </div>
)

export default ColorBlock