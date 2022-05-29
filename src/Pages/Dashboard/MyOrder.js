import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyOrder = ({ order, index }) => {

    const handleCancelOrder = (orderId) => {

        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure that you want to cancel your order?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch(`https://damp-sands-17118.herokuapp.com/deleteOrder/${orderId}`, {
                            method: 'DELETE',
                            headers: {
                                'content-type': 'application/json'
                            },
                        })
                            .then(res => res.json())
                            .then(data => {
                                toast.success('Your Order has been canceled successfully!!')
                            });
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        toast.error("Your order wasn't canceled")
                    }
                }
            ]
        });
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{(order.productName).slice(0, 25)}....</td>
            <td>{order.orderQuantity}</td>
            <td>${order.totalCost}</td>
            <td>
                {
                    order.paid ? <p className='text-green-500'>Paid</p> : <button className='btn btn-xs bg-red-500' onClick={() => handleCancelOrder(order._id)}>Cancel</button>
                }
            </td>
            <td>
                {
                    order.paid ? <span className='text-primary'>Already Paid</span> : <Link to={`/dashboard/payment/${order._id}`} order={order} className='btn btn-xs btn-primary' >Pay Now</Link>
                }
            </td>
            <td>{
                order.paid ? <span className='text-green-500'>{order.transactionId}</span> : <span className='text-red-400'>You have not paid yet</span>
            }</td>

        </tr>
    );
};

export default MyOrder;