import React, { useContext } from 'react';
import { AppContext } from './context';
import phoneImg from './images/phone.svg';

const Hero = () => {
   const { closeMegamenu } = useContext(AppContext);

   return (
      <section className='hero' onMouseOver={closeMegamenu}>
         <div className='hero-center'>
            <article className='hero-info'>
               <h1>payment infrastructure for the internet</h1>
               <p>
                  Millions of companies of all sizes - from startups to Fortune
                  500s - use Stripe's software and APIs to accept payments, send
                  payouts, and manage their businesses online.
               </p>
               <button className='btn'>Start now</button>
            </article>
            <article className='hero-images'>
               <img src={phoneImg} alt='phone' className='phone-img' />
            </article>
         </div>
      </section>
   );
};

export default Hero;

//data variable will output all the states & functions set up in context
