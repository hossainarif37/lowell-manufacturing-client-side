import React from 'react';
import { Link } from 'react-router-dom';

const HomepageHero = () => {
    const bgImageStyle = {
        backgroundImage:
            "url('https://i.ibb.co/G9kXsGh/5083649.jpg')",
        // height: '100vh',
        // marginTop: '-70px',
        // fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className="hero min-h-screen" style={bgImageStyle}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Lowell Parts</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary"><Link to='#contact'>Contact Us</Link></button>
                </div>
            </div>
        </div >
    )
};

export default HomepageHero;