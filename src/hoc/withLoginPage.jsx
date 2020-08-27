import React from 'react';
import { Redirect } from 'react-router-dom';

const withLoginPage = (Component, admin) => {
    if (!admin) return <Redirect to="/login" />
    return (
        <Component />
    );
};


export default withLoginPage;
