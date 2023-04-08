import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h3>This is Header</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;