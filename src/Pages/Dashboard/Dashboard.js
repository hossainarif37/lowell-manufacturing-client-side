import React from 'react';
import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
    return (
        <>
            <div className="drawer drawer-mobile my-10">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <h2 className="text-primary font-semibold text-2xl text-center underline mb-5">Welcome to your Dashboard!</h2>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='bg-base-200'><Link to="myOrders">My Orders</Link></li>
                        <li className='bg-base-200'><Link to="addAReview">Add A Review</Link></li>
                        <li className='bg-base-200'><Link to="myProfile">My Profile</Link></li>
                    </ul>

                </div>
            </div>

        </>
    );
};

export default Dashboard;