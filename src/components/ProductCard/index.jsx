import React from 'react'; // Nelle nuove versioni di react non c'è bisono scriverlo
import './styles.css';
import CardDescription from '../CardDescription'
import CardImage from '../CardImage'


const ProductCard = ({ title, price, description, image }) => (
  <div className="product-card">
    <CardImage src={image} />
    <CardDescription title={title} description={description}  price={parseFloat(price+((price*22)/100)).toFixed(2)} />
  </div>
)

export default ProductCard