import React from 'react';
import './style.css';

const ImageBlock = ({ image }) => (
    <div className='card__image'>
        <img className='prduct__image' src={image} alt="imgCard"  width="200px" />
    </div>
)

export default ImageBlock