import React from 'react';

const OrderCard = ({ order, index }) => {
    const { totalCost, email, orderQuantity, userName } = order;
    // console.log(order);
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{orderQuantity}</td>
            <td>{totalCost}</td>

            {/* <td>
                {
                    paid !== true && <td>Not paid</td>
                }
            </td> */}
        </tr>
    );
};

export default OrderCard;