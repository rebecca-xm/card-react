import React from 'react';

const ImageBlock = ({ image }) => (
    <div className='card__image'>
        <img className='prduct__image' src={image} alt="imgCard"  width="250px" />
    </div>
)

export default ImageBlock