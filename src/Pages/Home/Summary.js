import React from 'react';
import DetailHeader from '../Shared/DetailHeader';

const Summary = () => {
    return (
        <div className='py-12'>
            {/* <DetailHeader h1="Summary of Our Business" h2="Business Summary"></DetailHeader> */}
            <div className="stats shadow grid">

                <div className="stat sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">We Served</div>
                    <div className="stat-value text-primary">100+ Customers</div>
                    <div className="stat-desc">They are so lovely</div>
                </div>

                <div className="stat sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Annual revenue</div>
                    <div className="stat-value text-secondary">120M+</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className=" stat-title">Parts</div>
                    <div className="stat-value">50+</div>
                    <div className="stat-desc text-secondary">7 parts upcoming</div>
                </div>

            </div>
            {/* <div className="stats shadow">

                <div className="stat place-items-center">
                    <div className="stat-title">We Served</div>
                    <div className="stat-value">100+ customers</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Annual Revenue</div>
                    <div className="stat-value text-secondary">120M+</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value text-secondary">33K+</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Tools</div>
                    <div className="stat-value">50+ tools</div>
                    <div className="stat-desc">↗︎ 90 (14%)</div>
                </div>

            </div> */}
        </div>
    );
};

export default Summary;