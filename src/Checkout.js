import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />
        <div>
          <h3 className='checkout__email'>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>
            Your shopping Basket
            {
                basket.map(item => (
                    <CheckoutProduct 
                        id={item.id}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        title={item.title}
                    />
                ))
            }
          </h2>
          {/* <CheckoutProduct image={image} /> */}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
