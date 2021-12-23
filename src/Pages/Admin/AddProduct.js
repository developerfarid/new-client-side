import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import './Admin.css';

const AddProduct = () => {
    const myAlartForDataAdd = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Data has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const myAlartForDataNotAdd = () => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: ' Opps! Something worng.',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post("http://localhost:5000/product", data)
            .then(response => {
                if (response.data.insertedId) {
                    myAlartForDataAdd()
                    reset()
                }
                else {
                    myAlartForDataNotAdd()
                }
            })
    }
    
    return (
        <div>
            <form className="form-style text-left " onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}                
                <input placeholder="Product Name" {...register("title", { required: true})} />         
                <input type="number" placeholder="Product Rating" {...register("rating", { required: true})} />         
                <input placeholder="Image URL" {...register("url", { required: true})} />
                <textarea placeholder="Product Description" {...register("des", { required: true})} />
                <input type="number" placeholder="Product Price" {...register("price", { required: true})} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input className="btn btn-info mt-3" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;