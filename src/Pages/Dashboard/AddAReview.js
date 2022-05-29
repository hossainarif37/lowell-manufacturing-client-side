import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddAReview = () => {
    const [user, loading] = useAuthState(auth);
    const min = 1;
    const max = 5;

    const [value, setValue] = useState(1);

    if (loading) {
        return <Loading></Loading>
    }
    const handleChange = event => {
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setValue(value);
    };


    const handleSubmitReview = (event) => {
        event.preventDefault();
        const text = event.target.review.value;
        const ratings = value;

        const review = { text, ratings, email: user?.email, name: user?.displayName };
        fetch('https://damp-sands-17118.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Your Review Submitted Successfully!')
                // console.log(data);
                event.target.review.value = '';
            });
        // console.log('clicked', text, ratings);
    };




    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Review now!</h1>
                    <p className="py-6">You can review for our services and Quality! You have to pick 1 to 5 ratings and write some text!!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmitReview}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ratings (1 to 5)</span>
                                </label>
                                <input type="number" placeholder="Enter your Rating" value={value}
                                    onChange={handleChange} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Add Review</span>
                                </label>
                                <textarea required type="text" rows="4" cols="50" name="review" placeholder="Write your review" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
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