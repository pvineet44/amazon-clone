/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt='home-image'
        />
        <div className='home__row'>
          <Product
            id={12345678}
            title='The lean startup'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
            rating={5}
          />
          <Product
          id={12345678}
          title='The lean startup'
          price={29.99}
          image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
          rating={5}
          />
        </div>
        <div className='home__row'>
          <Product 
          id='4903050'
          title='Samsung LC49RG90SSUXEN 49 Inch Curved LED Gaming Monitor'
          price={199.99}
          image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
          rating={5}
          />
          <Product
          id='23445930'
          title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
          price={98.99}
          image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
          rating={5} 
          />
          <Product 
          id='3254354345'
          title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
          price={598.99}
          image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRJ7Y3xOkenybRs-EGxDpBwp5HB-nyCEHr5SiFqlrqYAzGvPsaVgoU&usqp=CAc'
          rating={4}
          />
        </div>
        <div className='home__row'>
        <Product 
          id='4903050'
          title='Samsung LC49RG90SSUXEN 49 Inch Curved LED Gaming Monitor'
          price={199.99}
          image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
          rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
