import React  from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';


function Payment() {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();

  return (
    <div className='payment'>
      <div className='payment__container'>
        {/* Payment Section - Delivery Address */}
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items
          </Link>)
        </h1>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* Payment Section - Review Items */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and Delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                price={item.price}
                rating={item.rating}
                title={item.title}
              />
            ))}
          </div>
        </div>
        {/* Payment Section - Paymnet method */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            {/* Stripe magic will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
