import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://damp-sands-17118.herokuapp.com/product').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Total products : {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow key={product._id} index={index} refetch={refetch} product={product}></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;