import { useQuery } from 'react-query';
import OrderCard from './OrderCard';
import Loading from '../../Pages/Shared/Loading'

const ManageOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://damp-sands-17118.herokuapp.com/order').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-semibold text-center text-xl pb-5 text-green-600 underline'>Manage All Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Orderer</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <OrderCard key={order._id} index={index} refetch={refetch} order={order}></OrderCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;