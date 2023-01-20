/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51MQAGsLXTkp0ne7OKLxANCx8Ksn7kSEOajM4NOjQ2aXyJcnTu9ZVU1CktuEobGu27SxmgZmQH23wcAsjdxuHsCin00HaatzMDP'
  );
  try {
    // 1. get checkout session from API
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);
    // 2. create checkout form and charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
