import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import UseAuth from '../../Hooks/UseAuth';



const MyOrder = () => {
    const [order, setOrder] = useState([])
    const {user, logOut}= UseAuth()
    const newok = {
        up:"Approved"
    }
    
 useEffect(() => {
        fetch(`http://localhost:5000/order/${user?.email}`).then(res => res.json()).then(data => setOrder(data))
    }, [])
    const myAlartForDataAdd = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Data has been Update',
            showConfirmButton: false,
            timer: 1500
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
                    method:"DELETE"
                })
                    .then(ress=> ress.json())
                    .then(res => {
                        const re = order.filter(item => item._id !== id)
                        setOrder(re);
                })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })

       
        
    }


   console.log(order);
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
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>

                {
                    order?.map((item, i) => <>
                    <tr>
                    <td>{i+1}</td>
                   
                  
                            <td>{item?.name }</td>
                            <td>{item?.title }</td>
                   
                            <td>{item?.email }</td>
                            <td>{item?.number }</td>
                            <td>{item?.address }</td>
                            <td>{item?.status}</td>

                            
                            <td><button className="btn btn-danger" onClick={()=> handleCancel(item?._id)}>Cancel</button></td>
                    </tr>
                    </>)
                }
           
            </tbody>
        </Table>
    </Container>
    );
};

export default MyOrder;