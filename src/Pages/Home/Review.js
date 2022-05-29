import React from 'react';

const Review = ({ review, refetch }) => {
    refetch();
    return (
        <div className="card lg:max-w-lg bg-base-200 shadow-xl">
            <div className="card-body">
                <div className='flex mx-auto'>
                    <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                            <span className="text-3xl">{review.name.slice(0, 1)}</span>
                        </div>
                    </div>
                </div>
                <h2 className="card-title text-cyan-500">{review.name}</h2>
                <p>{review.text}</p>
                <p>Ratings: <span className='text-red-400'>{review.ratings}</span></p>
            </div>
        </div>

    );
};

export default Review;