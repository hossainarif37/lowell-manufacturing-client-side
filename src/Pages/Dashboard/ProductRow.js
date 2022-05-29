import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index, refetch }) => {
    const { name, qty, price } = product;


    const handleDelete = (id) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure that you want to delete this product?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch(`https://damp-sands-17118.herokuapp.com/product/${id}`, {
                            method: 'DELETE',
                            headers: {
                                'content-type': 'application/json'
                            },
                        })
                            .then(res => res.json())
                            .then(data => {
                                refetch();
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
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{qty}</td>
            <td>{price}</td>
            <td>
                <button className="btn btn-xs" onClick={() => handleDelete(product._id)}>Delete</button>
            </td>
        </tr>
    );
};

export default ProductRow;