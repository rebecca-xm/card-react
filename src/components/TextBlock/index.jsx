import React from 'react';
import './style.css';

const TextBlock = ({ product, price }) => (
  <div classproduct="text-block">
    <h3 classproduct="text-block__product">{product}</h3>
    <h3 classproduct="text-block__price">{price}</h3>
  </div>
)

export default TextBlock