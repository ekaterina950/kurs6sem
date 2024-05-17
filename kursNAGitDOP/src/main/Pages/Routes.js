import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Импортируем новую страницу
import AccountPage from './AccountPage';
import ErrorPage from './ErrorPage';
import AuthorizationPage from './AuthorizationPage';
import OrderPage from './OrderPage';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/account" component={AccountPage} />
            <Route path="/authorization" component={AuthorizationPage} />
            <Route path="/order" component={OrderPage} />
            <Route path="/error" component={ErrorPage} />
        </Switch>
    );
}

export default Routes;
