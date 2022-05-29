import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [disabled, setDisabled] = useState(false);


    // console.log(user);
    useEffect(() => {
        const url = `https://damp-sands-17118.herokuapp.com/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const { name, description, img, price, qty, minOrder } = product;

    if (loading) {
        return <Loading></Loading>
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const userName = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        const orderQuantity = event.target.order.value;
        const productName = name;

        if (orderQuantity < minOrder) {
            toast.error(`Your minimum order quantity is ${minOrder} PCS`)
            return setDisabled(true);
        }

        if (orderQuantity > qty) {
            toast.error(`Insufficient stock. You can order ${qty} PCS`)
            return setDisabled(true);
        }
        const totalCost = parseInt(orderQuantity) * parseInt(price);

        const userEmail = user?.email;
        const order = { productName, userName, email, img, number, orderQuantity, userEmail, totalCost };

        fetch('https://damp-sands-17118.herokuapp.com/order', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Your order has been added. Check out now!');
                // console.log(data)
            });


    };

    return (
        <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-full card bg-base-100 rounded-box place-items-center">
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure><img src={img} alt="productImage" /></figure>
                    <div className="card-body">
                        <h1 className="card-title underline text-secondary">Details</h1>
                        <h2 className="card-title">{name}</h2>
                        <p className='font-semibold'>Price Per piece: {price}</p>
                        <p className='font-semibold'>Available Quantity: {qty}</p>
                        <p><span className='font-semibold'>Description</span> <br />
                            {
                                description?.map((d, index) => <li key={index}>{d}</li>)
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div className="divider lg:divider-horizontal">INFO</div>
            <div className="grid flex-grow h-full card bg-base-200 rounded-box place-items-center">
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Purchase Your Order!</h2>


                        <div className="form-control w-full max-w-xs">
                            <form onSubmit={handleSubmit}>
                                <label className="label">
                                    <span className="label-text">What is your name?</span>
                                </label>
                                <input name='name' type="text" required defaultValue={user?.displayName} disabled className="input input-bordered w-full max-w-xs" />



                                <label className="label">
                                    <span className="label-text">What is your email?</span>
                                </label>
                                <input name='email' type="text" disabled defaultValue={user?.email} className="input input-bordered w-full max-w-xs" />


                                <label className="label">
                                    <span className="label-text">Phone number?</span>
                                </label>
                                <input name='number' type="text" placeholder="Phone number" required className="input input-bordered w-full max-w-xs" />


                                <label className="label">
                                    <span className="label-text">How much you want to order?</span>
                                </label>
                                <input name='order' defaultValue={minOrder} type="number" placeholder="Order Quantity" className="input input-bordered w-full max-w-xs" />


                                <input type="submit" disabled={disabled} className='btn btn-accent w-full max-w-xs mt-5' value="Purchase" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;