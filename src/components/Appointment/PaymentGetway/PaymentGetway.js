import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IhKI3GqsHjhpftFCKPEb3PKgXzfj5NlselIhs1DZeIynw5xm4kgo0hwNINoOTySMX0y5stUwVipD2Q18GO2rjzS00qFwkvLFN');

const PaymentGetway = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCard></PaymentCard>
            
        </Elements>
    );
};

export default PaymentGetway;