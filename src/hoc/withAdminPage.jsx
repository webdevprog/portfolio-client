import React from 'react';
import { Redirect } from 'react-router-dom';

const withAdminPage = (Component, admin) => {
    if (admin) return <Redirect to="/admin" />
    return (
        <Component />
    );
};


export default withAdminPage;
