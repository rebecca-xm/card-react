import React from 'react';
import './style.css';

const SizeBlock = ({ small, medium, large }) => (
    <div className='product__size'>
        <label className='size__label'>Size</label>
        <div className='size'>
            <p className='sizeS'>{small}</p>
            <p className='sizeM'>{medium}</p>
            <p className='sizeL'>{large}</p>
        </div>
    </div>
)

export default SizeBlock