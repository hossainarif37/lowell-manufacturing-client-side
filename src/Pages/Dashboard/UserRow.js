import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const UserRow = ({ user, index, refetch }) => {
    const { email, name, role } = user;

    const makeAdmin = () => {
        if (email) {
            fetch(`https://damp-sands-17118.herokuapp.com/user/admin/${email}`, {
                method: 'PUT',
            })
                .then(res => {
                    console.log(res)
                    if (res.status === 403) {
                        toast.error('Failed to make an Admin');
                    }
                })
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        refetch();
                        toast.success('User added in Admin successfully!')
                    }
                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{name}</td>
            <td>
                {
                    role !== 'admin' && <button className="btn btn-xs" onClick={makeAdmin}>Make Admin</button>
                }
            </td>
        </tr>
    );
};

export default UserRow;