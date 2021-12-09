import React from 'react';
import TextBlock from '../TextBlock';
import ParagraphBlock from '../ParagraphBlock';
import ImageBlock from '../ImageBlock';
import SizeBlock from '../SizeBlock';
import ButtonBlock from '../ButtonBlock';
import ColorBlock from '../ColorBlock';

const ProductCard = () => (
  <div className='product__card'>
    <div className='product__header'>
      <ImageBlock image="https://res.cloudinary.com/db46klhlo/image/upload/v1639056543/jakob-owens-O_bhy3TnSYU-unsplash.jpg" />
    </div>
    <div className='product__textblock'>
      <TextBlock product='Backpack' price='34$' />
    </div>
    <div className='product__description'>
      <ParagraphBlock description='With a concept designed to be easy to understand, RAINS bridge the gap between geography and lifestyle.' />
    </div>
    <div className='product__colors'>
      <ColorBlock black='' purple='' yellow='' green='' />
    </div>
    <div className='product__size'>
      <SizeBlock small='S' medium='M' large='L' />
    </div>
    <div className='product__button'>
      <ButtonBlock addtocart='Add to cart' />
    </div>
  </div>
)

export default ProductCard;