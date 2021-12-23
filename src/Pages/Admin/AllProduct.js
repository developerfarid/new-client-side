import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import UseAuth from '../../Hooks/UseAuth';


const AllProduct = () => {

    const [orders, setOrders] = useState([])
    const { user, logOut } = UseAuth()
    const newok = {
        up: "Approved"
    }
    useEffect(() => {
        fetch(`http://localhost:5000/order`).then(res => res.json()).then(data => setOrders(data))
    }, [])

    // useEffect(() => {
    //     fetch(`https://afternoon-bayou-21114.herokuapp.com/order/${user?.email}`).then(res => res.json()).then(data => setOrder(data))
    // }, [])

    const myAlartForDataAdd = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Data has been Update',
            showConfirmButton: false,
            timer: 1500
        })
    }
    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newok)
        })
            .then(ress => ress.json())
            .then(res => {
                if (res.modifiedCount) {
                    fetch(`http://localhost:5000/order`)
                        .then(res => res.json())
                        .then(data => {
                            setOrders(data)
                            myAlartForDataAdd()
                            // window.location.reload()

                        })
                }

            })
    }

    const handleCancel = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/order/${id}`, {
                    method: "DELETE"
                })
                    .then(ress => ress.json())
                    .then(res => {

                        const re = orders.filter(item => item._id !== id)
                        setOrders(re);
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }



    return (
        <Container >
            <Table responsive="xl" striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Product Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders?.map((item, i) => <>
                            <tr>
                                <td>{i + 1}</td>


                                <td>{item?.name}</td>
                                <td>{item?.title}</td>

                                <td>{item?.email}</td>
                                <td>{item?.number}</td>
                                <td>{item?.address}</td>
                                <td>{item?.status}</td>

                                <td><button className="btn btn-outline-success" onClick={() => handleUpdate(item?._id)}>Approve Now</button></td>

                                <td><button className="btn btn-danger" onClick={() => handleCancel(item?._id)}>Cancel</button></td>
                            </tr>
                        </>)
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default AllProduct;