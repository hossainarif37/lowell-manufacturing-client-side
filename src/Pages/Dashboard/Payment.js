import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L43jCJ2XuAf4degCd34duhy0ULXWAdESjIwdbbayKHbuepRUHoo3YKUozAh7eYn3hIrpcjx7RfdeK6nZXbCR7jN00e27dMYjY');

const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/payment/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(order)
                setOrder(data);
            });
    }, [setOrder]);
    const { productName, totalCost, img, orderQuantity, number, email } = order;
    return (
        <div class="flex flex-col w-full border-opacity-50">
            <div class="grid card bg-base-300 rounded-box place-items-center">
                <div class="grid  card bg-base-300 py-5 rounded-box place-items-center">
                    <div className="card lg:max-w-md bg-base-100 shadow-xl">
                        <figure><img src={img} alt="productImage" /></figure>
                        <div className="card-body">
                            <h1 className="card-title underline text-secondary">Details</h1>
                            <h2 className="card-title">{productName}</h2>
                            <p className='font-semibold'>Quantity: {orderQuantity}</p>
                            <h2 className='font-semibold text-green-500 text-2xl'>Please pay: {totalCost}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider">Pay</div>
            <div class="card flex-shrink-0 p-10 w-50 max-w-md shadow-2xl bg-base-200">
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div >
        // <div className="card lg:max-w-md bg-base-100 shadow-xl">
        //                     <figure><img src={img} alt="productImage" /></figure>
        //                     <div className="card-body">
        //                         <h1 className="card-title underline text-secondary">Details</h1>
        //                         <h2 className="card-title">{productName}</h2>
        //                         <p className='font-semibold'>Quantity: {orderQuantity}</p>
        //                         <h2 className='font-semibold text-green-500 text-2xl'>Please pay: {totalCost}</h2>
        //                     </div>
        //                 </div>
    );
};

export default Payment;