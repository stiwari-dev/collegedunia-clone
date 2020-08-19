import React from 'react';

import './Layout.css';
import CollegesList from '../../containers/CollegesList/CollegesList';

const Layout = () => {
    return (
        <main>
            <div className="container">
                <h4 className="title">Colleges in North India</h4>
                <CollegesList />
            </div>
        </main>
    );
};

export default Layout;