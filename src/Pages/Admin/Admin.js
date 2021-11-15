
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

import AddProduct from './AddProduct';
import AddReview from './AddReview';
import AdminRoute from './AdminRoute';
import AllProduct from './AllProduct';
import AllProducts from './AllProducts';
import MakeAdmin from './MakeAdmin';
import MyOrder from './MyOrder';
import Pay from './Pay';

const Admin = () => {
  let { path, url } = useRouteMatch();
  // const { user, logOut,admin } = UseAuth()
  const { admin, logOut } = UseAuth()

 
  return (
    <div className="mt-5">
      <Row>
        <Col xs={12} md={3}>
          <ul className="list-unstyled ml-4">

            {admin?.role && <li>
              <Link className="btn btn-info m-2 w-100" to={`${url}/product`}>Add Product</Link>
            </li>}
            {admin?.role && <li>
              <Link className="btn btn-info m-2 w-100" to={`${url}/makeAdmin`}>Make Admin</Link>
            </li>}
            {admin?.role && <li>
              <Link className="btn btn-info m-2 w-100" to={`${url}/order`}>All Order</Link>
            </li>}
            {admin?.role && <li>
              <Link className="btn btn-info m-2 w-100" to={`${url}/allProducts`}>All Product</Link>
            </li>}
            <li>
              <Link className="btn btn-info m-2 w-100" to={`${url}/myorder`}>My Order</Link>
            </li>
            <li>
              <Link className="btn btn-info m-2 w-100" to={`${url}/review`}>Add Review</Link>
            </li>
            <li>
              <Link className="btn btn-info m-2 w-100" to={`${url}/pay`}>Payment</Link>
            </li>
            <button className="btn btn-info m-2 w-100" onClick={logOut} > Logout</button>
          </ul></Col>
        <Col xs={12} md={9}>
          <Switch>
            <Route exact path={path}>
              <MyOrder />
            </Route>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </AdminRoute>
            <AdminRoute path={`${path}/order`}>
              <AllProduct />
            </AdminRoute>
            <AdminRoute path={`${path}/allProducts`}>
              <AllProducts />
            </AdminRoute>
            <AdminRoute path={`${path}/product`}>
              <AddProduct />
            </AdminRoute>
            <Route path={`${path}/myOrder`}>
              <MyOrder />
            </Route>
            <Route path={`${path}/pay`}>
              <Pay />
            </Route>
            <Route path={`${path}/review`}>
              <AddReview />
            </Route>
          </Switch>
        </Col>
      </Row>


    </div>
  );
};

export default Admin;