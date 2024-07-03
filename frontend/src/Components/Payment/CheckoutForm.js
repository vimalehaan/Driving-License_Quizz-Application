import React, { useCallback, useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

import { jwtDecode } from "jwt-decode";

import Return from "./Return";


const stripePromise = loadStripe("pk_test_51P0HbhKqUCwilBKS4TxXgjQwtEn6vXTEmsyIEKLUSrcfGADWKkl27RZErtHgD4zpJmoXSWZH6HJaBNKl95nytOlA0087HAynlO");

// const userToken=localStorage.getItem("token");
// const decoded = jwtDecode(userToken);
// console.log(decoded?.userId);

const CheckoutForm = () => {

  const [checkoutComplete, setCheckoutComplete] = useState(false);


  useEffect(() => {
    // Check if checkout is complete
    // You may have your own logic to determine when the checkout is complete
    if (checkoutComplete) {
      console.log("Checkout complete");
      // Call backend webhook when checkout is complete
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
      // Handle error as needed (e.g., show error message to user)
    }
  };

  const handlePaymentComplete = () => {
    setCheckoutComplete(true); // Trigger checkout completion when payment is successful
  };

  return (
    <div>
      <div id="checkout">
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={options}
        >
          <EmbeddedCheckout
            onPayment={handlePaymentComplete} // Call handlePaymentComplete when payment is successful
          />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
};

export default CheckoutForm;
