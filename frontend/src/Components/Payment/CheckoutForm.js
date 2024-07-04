import React, { useCallback, useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';


import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

import styled from 'styled-components';

import Return from "./Return";

const stripePromise = loadStripe("pk_test_51P0HbhKqUCwilBKS4TxXgjQwtEn6vXTEmsyIEKLUSrcfGADWKkl27RZErtHgD4zpJmoXSWZH6HJaBNKl95nytOlA0087HAynlO");

const CheckoutWrapper = styled.div`
  /* background: black; */
`;

const EmbeddedCheckoutStyled = styled(EmbeddedCheckout)`
  background: none !important;
`;

const CheckoutForm = () => {
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  useEffect(() => {
    if (checkoutComplete) {
      console.log("Checkout complete");
      callBackendWebhook();
    }
  }, [checkoutComplete]);

  const fetchClientSecret = useCallback(() => {
    return fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ priceId: 'price_1PSMbQKqUCwilBKSPpH3pfJt' }),
    })
      .then((res) => res.json())
      .then((data) => {
        return data.clientSecret;
      });
  }, []);

  const options = { fetchClientSecret };

  const callBackendWebhook = async () => {
    try {
      const response = await fetch("http://localhost:3000/webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ checkoutComplete }),
      });
      if (!response.ok) {
        throw new Error("Failed to call backend webhook");
      }
      console.log("Backend webhook called successfully");
    } catch (error) {
      console.error("Error calling backend webhook:", error.message);
    }
  };

  const handlePaymentComplete = () => {
    setCheckoutComplete(true);
  };

  return (
    <div>
      <CheckoutWrapper id="checkout" style={{background: 'transparent'}}>
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={options}
        >
          <EmbeddedCheckoutStyled
            onPayment={handlePaymentComplete}
          />
        </EmbeddedCheckoutProvider>
      </CheckoutWrapper>
    </div>
  );
};

export default CheckoutForm;
