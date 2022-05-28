import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddAReview = () => {
    const [user, loading] = useAuthState(auth);
    const min = 1;
    const max = 5;

    const [value, setValue] = useState(1);

    const handleChange = event => {
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setValue(value);
    };


    const handleSubmitReview = (event) => {
        event.preventDefault();
        const text = event.target.review.value;
        const ratings = value;

        const review = { text, ratings, email: user?.email, name: user?.displayName };
        fetch('http://localhost:4000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Your Review Submitted Successfully!')
                console.log(data);
                event.target.review.value = '';
            });
        console.log('clicked', text, ratings);
    };




    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Review now!</h1>
                    <p class="py-6">You can review for our services and Quality! You have to pick 1 to 5 ratings and write some text!!</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmitReview}>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Ratings (1 to 5)</span>
                                </label>
                                <input type="number" placeholder="Enter your Rating" value={value}
                                    onChange={handleChange} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Add Review</span>
                                </label>
                                <textarea required type="text" rows="4" cols="50" name="review" placeholder="Write your review" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <input type="submit" className='btn btn-md' value='Add a review' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAReview;