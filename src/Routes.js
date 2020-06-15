import React from 'react';
import { Route } from 'react-router-dom';
import App from './pages/App/App';

const Routes = () => {
    return (
        <Route exact path="/" component={App} />
    );
};

export default Routes;
