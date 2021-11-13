import React from 'react';
import { Spinner } from 'react-bootstrap';
// import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useData from '../Hooks/useData';



const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoding } = useData()
    if (isLoding) {
        return (<Spinner className="text-center" animation="grow" />)
    }
  
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;