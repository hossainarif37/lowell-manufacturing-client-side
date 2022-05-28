import React from 'react';
import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
    return (
        <>
            <div class="drawer drawer-mobile my-10">
                <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">

                    <h2 className="text-primary font-semibold text-2xl text-center underline mb-5">Welcome to your Dashboard!</h2>
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="dashboard-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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