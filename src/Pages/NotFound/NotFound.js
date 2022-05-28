import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from '../../Images/404_Not_Found.png'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-[#F7F7F7] mb-24 lg:mb-12'>
            <img src={notFound} alt="" />

            <div className='w-full lg:w-60 m-auto text-center py-8'>
                <button onClick={() => navigate('/')} className='btn btn-neutral text-white'>Back to Home</button>
            </div>
        </div>
    );
};

export default NotFound;