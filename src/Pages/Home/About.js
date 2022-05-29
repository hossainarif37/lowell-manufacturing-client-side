import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const About = () => {
    const [user] = useAuthState(auth);
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Hello {
                        user ? user?.displayName : 'there'
                    }!</h1>
                    <p class="py-6">We are International company. We try to make a product perfectly. Our head Company is in United Sates of America. Our buyers posted some Awesome Review you can see it in review section.</p>
                    <button class="btn btn-primary" disabled>Order Any Product</button>
                </div>
            </div>
        </div>
    );
};

export default About;