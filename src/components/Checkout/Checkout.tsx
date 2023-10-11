import React, { useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';

import * as styles from './Checkout.module.scss';

const buttonStyles = {
  fontSize: '13px',
};

const buttonDisabledStyles = {
  opacity: '0.5',
  cursor: 'not-allowed',
};

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      'pk_test_51NUwlyIAmM2SgDacanaiOu00gt4bQsD8SYPYK6mzzu5kcfGew4o4Eg9GJT2OXqRBq5FkrOhKt3herdDN8PzAAS6v00VM6nqQey'
    );
  }
  return stripePromise;
};

interface ICheckout {
  price: string;
}

const Checkout = ({ price }: ICheckout) => {
  const [loading, setLoading] = useState(false);

  const redirectToCheckout = async (
    event: React.SyntheticEvent<EventTarget>
  ) => {
    event.preventDefault();
    setLoading(true);

    const stripe = await getStripe();
    if (!stripe) {
      console.warn('Error: Stripe.js failed to load');
      setLoading(false);
      return;
    }

    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: `${price}`, quantity: 1 }],
      successUrl: `https://upbeat-jennings-ef82c3.netlify.app/thank-you`,
      cancelUrl: `https://upbeat-jennings-ef82c3.netlify.app/`,
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
