import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://damp-sands-17118.herokuapp.com/user').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Total Users : {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow key={user._id} index={index} refetch={refetch} user={user}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;