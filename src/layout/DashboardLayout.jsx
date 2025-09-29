import React from 'react';
import Navbar from '../components/dashboard/Navbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <div>
                <div>
                    <Navbar/>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;