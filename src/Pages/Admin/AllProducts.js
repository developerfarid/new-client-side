import React from 'react';
import { Container, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import UseAuth from '../../Hooks/UseAuth';

const AllProducts = () => {
    const { productAll, setProductAll } = UseAuth()
    
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
                fetch(`http://localhost:5000/productAll/${id}`, {
                    method: "DELETE"
                })
                    .then(ress => ress.json())
                    .then(res => {

                        const re = productAll.filter(item => item._id !== id)
                        setProductAll(re);
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
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Image Url</th>
                    <th>Description</th>
                    
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>

                {
                    productAll?.map((item, i) => <>
                        <tr>
                            <td>{i + 1}</td>


                      
                            <td>{item?.title}</td>

                            <td>{item?.price}</td>
                            <td>{item?.url}</td>
                            <td>{item?.des}</td>
                            <td><button className="btn btn-danger" onClick={() => handleCancel(item?._id)}>Cancel</button></td>
                        </tr>
                    </>)
                }

            </tbody>
        </Table>
    </Container>
    );
};

export default AllProducts;