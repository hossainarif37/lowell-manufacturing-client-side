import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [loadUser, setLoadUser] = useState({});
    const email = user?.email;
    const name = user?.displayName;


    useEffect(() => {
        fetch(`https://damp-sands-17118.herokuapp.com/user/${email}`)
            .then(res => res.json())
            .then(data => setLoadUser(data));
    }, [loadUser]);


    const handleSubmit = (event) => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const education = event.target.education.value;
        const location = event.target.location.value;
        const linkedIn = event.target.linkedIn.value;
        const image = event.target.image.value;


        const updateUser = { phone, education, location, linkedIn, image, email, name };
        // console.log(phone, education, location, linkedIn, image);


        fetch(`https://damp-sands-17118.herokuapp.com/user/${email}`,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateUser)
            })
            .then(res => res.json())
            .then(data => console.log(data));

    };

    return (
        <div className="mockup-window border bg-base-200">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex justify-center'>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="font-semibold text-2xl text-center">My Profile</h2>
                                <div className="avatar my-5">
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://api.lorem.space/image/face?hash=3174" />
                                    </div>
                                </div>
                                <p><span className='font-semibold'>Name:</span> <span>{user?.displayName}</span></p>
                                <p><span className='font-semibold'>Email:</span> <span>{user?.email}</span></p>
                                <p><span className='font-semibold'>Phone:</span> <span>{loadUser?.phone}</span></p>
                                <p><span className='font-semibold'>Education:</span> <span>{loadUser?.education}</span></p>
                                <p><span className='font-semibold'>Location:</span> <span>{loadUser?.location}</span></p>
                                <p><span className='font-semibold'>LinkedIn Profile:</span> <span>{loadUser?.linkedIn}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">Update Your Info!</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone number</span>
                                    </label>
                                    <input name='phone' type="text" placeholder="Phone" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Profile Img URL</span>
                                    </label>
                                    <input name='image' type="text" placeholder="Image URL" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Education</span>
                                    </label>
                                    <input name='education' type="text" placeholder="Education" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location (city/district)</span>
                                    </label>
                                    <input name='location' type="text" placeholder="Your Location" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">LinkedIn profile link</span>
                                    </label>
                                    <input name='linkedIn' type="text" placeholder="Profile link" className="input input-bordered" />
                                </div>


                                <div className="form-control mt-6">
                                    <input type='submit' className="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;