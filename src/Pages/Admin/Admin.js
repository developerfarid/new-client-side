import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import AddProduct from './AddProduct';
import AddReview from './AddReview';
import AllProduct from './AllProduct';
import MakeAdmin from './MakeAdmin';
import MyOrder from './MyOrder';
import Pay from './Pay';

const Admin = () => {
  let { path, url } = useRouteMatch();
  const { user, logOut } = UseAuth()
  const [admin, setAdmin] = useState([])
  console.log(admin.role);
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data[0]))
  }, [])
  return (
    <div>
      <h2>Topics</h2>
      <Row>
        <Col xs={12} md={3}>
          <ul className="list-unstyled ml-4">

            {admin.role && <li>
              <Link className="btn btn-info m-2 w-100" to={`${url}/product`}>Add Product</Link>
            </li>}
            {admin.role && <li>
              <Link className="btn btn-info m-2 w-100" to={`${url}/makeAdmin`}>Make Admin</Link>
            </li>}
            {admin.role && <li>
              <Link className="btn btn-info m-2 w-100" to={`${url}/order`}>All Order</Link>
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
              <AddProduct />
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </Route>
            <Route path={`${path}/order`}>
              <AllProduct />
            </Route>
            <Route path={`${path}/product`}>
              <AddProduct />
            </Route>
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