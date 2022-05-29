import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import DetailHeader from '../Shared/DetailHeader';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const queryClient = useQueryClient()
    const { data: reviews, isLoading, refetch } = useQuery(['reviews'], () => fetch(`https://damp-sands-17118.herokuapp.com/review`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <DetailHeader h2={'Reviews'} h1={'Here is our all reviews'}></DetailHeader>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews?.map(review => <Review key={review._id} refetch={refetch} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;