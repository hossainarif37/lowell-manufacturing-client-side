import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    // console.log(part);
    const { name, price, description, img, minOrder, _id, qty } = part;
    const navigate = useNavigate();

    const handlePurcahsePage = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge backdrop-grayscale-1 badge-secondary">HOT</div>
                </h2>
                <ul>
                    {
                        description.map((data, index) =>
                            <li key={index}>
                                {index + 1}. {data}
                            </li>)
                    }
                </ul>
                <p className='font-semibold'>Price: {price} BDT</p>
                <p className='font-semibold'>Minimum Order: {minOrder} PCS</p>
                <p className='font-semibold'>Available Quantity: {qty} {qty <= 1 ? 'PC' : 'PCS'}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-success btn-md" onClick={() => handlePurcahsePage(_id)}>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;