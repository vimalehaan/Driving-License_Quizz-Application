import React, { useCallback } from "react";
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe("pk_test_51P0HbhKqUCwilBKS4TxXgjQwtEn6vXTEmsyIEKLUSrcfGADWKkl27RZErtHgD4zpJmoXSWZH6HJaBNKl95nytOlA0087HAynlO");

const CheckoutForm = () => {
  const fetchClientSecret = useCallback(() => {
    return fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ priceId: 'price_1PSMbQKqUCwilBKSPpH3pfJt' }),
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default CheckoutForm;
