import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L4USlEwxm2jzbz6Lj6VHMs99ZV1eR9RW80Y9eeI3sAvm9EvT1RSj174DZT5HCSWnlKwvih2ZlxgQtnM86pA0cqD003qxJoDIs');

const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`https://damp-sands-17118.herokuapp.com/payment/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(order)
                setOrder(data);
            });
    }, [setOrder]);
    const { productName, totalCost, img, orderQuantity, number, email } = order;
    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="grid card bg-base-300 rounded-box place-items-center">
                <div className="grid  card bg-base-300 py-5 rounded-box place-items-center">
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
            <div className="divider">Pay</div>
            <div className="card flex-shrink-0 p-10 w-50 max-w-md shadow-2xl bg-base-200">
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