import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

import * as styles from './Checkout.module.scss';

const buttonStyles = {
  fontSize: '13px',
};

const buttonDisabledStyles = {
  opacity: '0.5',
  cursor: 'not-allowed',
};

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      'pk_test_51NUwlyIAmM2SgDacanaiOu00gt4bQsD8SYPYK6mzzu5kcfGew4o4Eg9GJT2OXqRBq5FkrOhKt3herdDN8PzAAS6v00VM6nqQey'
    );
  }
  return stripePromise;
};

const Checkout = ({ price }) => {
  const [loading, setLoading] = useState(false);

  const redirectToCheckout = async event => {
    event.preventDefault();
    setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: `${price}`, quantity: 1 }],
      successUrl: `http://localhost:8000/thank-you`,
      cancelUrl: `http://localhost:8000/`,
    });

    if (error) {
      console.warn('Error:', error);
      setLoading(false);
    }
  };

  return (
    <button
      className={`${styles.checkoutStyle}`}
      disabled={loading}
      style={
        loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
      }
      onClick={redirectToCheckout}
    >
      BUY
    </button>
  );
};

export default Checkout;
