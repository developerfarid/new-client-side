import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, loding } = UseAuth();
    if (loding) { return (<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>)}
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;