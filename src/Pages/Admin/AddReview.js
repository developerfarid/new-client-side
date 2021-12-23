import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import UseAuth from '../../Hooks/UseAuth';

const AddReview = () => {
    const { user } = UseAuth()

    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const registerAlart = () => {
        Swal.fire(
            'Congratulations!',
            'Your data successfully Added',
            'success'
        )
    }
    const onSubmit = data => {
        data.name = user.displayName 

        fetch("http://localhost:5000/review", {
            method: "POST",
            "headers": {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(info => {
            if (info.insertedId) {
                registerAlart()
                reset()
            }
        })
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
      
        <input type="text" placeholder="Review Details" {...register("details", { required: true })} />
        {/* include validation with required or other standard HTML validation rules */}
        <input type="number" placeholder="Review Rating" {...register("rating", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
    );
};

export default AddReview;