import React from 'react';

const Review = ({ review, refetch }) => {
    refetch();
    return (
        <div class="card lg:max-w-lg bg-base-200 shadow-xl">
            <div class="card-body">
                <div className='flex mx-auto'>
                    <div class="avatar placeholder">
                        <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                            <span class="text-3xl">{review.name.slice(0, 1)}</span>
                        </div>
                    </div>
                </div>
                <h2 class="card-title text-green-500">{review.name}</h2>
                <p>{review.text}</p>
                <p>Ratings: <span className='text-green-400'>{review.ratings}</span></p>
            </div>
        </div>

    );
};

export default Review;