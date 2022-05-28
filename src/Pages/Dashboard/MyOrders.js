import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    const authEmail = user?.email;

    useEffect(() => {
        fetch(`http://localhost:4000/order/${authEmail}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [setOrders]);

    console.log(orders);

    return (
        <div class="mockup-window border bg-base-300">
            <div class="flex justify-center px-4 py-16 bg-base-200">
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                                <th>Payment</th>
                                <th>Transaction</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <MyOrder order={order} index={index} key={order._id}></MyOrder>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyOrders;