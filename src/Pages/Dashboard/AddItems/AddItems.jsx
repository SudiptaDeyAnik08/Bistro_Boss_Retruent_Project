import React from 'react'
import { useForm } from "react-hook-form"

import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import { FaUtensils } from 'react-icons/fa6';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

function AddItems() {


    const { register, handleSubmit,reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const onSubmit = async (data) => {
        console.log(data);
        
        
        const imageFile = {image : data.image[0]}

        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        } )
        
        console.log(res.data );

        if(res.data.success){
            const menuItem ={
                name:data.name,
                category:data.category,
                price:parseFloat(data.price),
                recipe:data.recipe,
                image:res.data.data.display_url
            }

            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);

            if(menuRes.data.insertedId){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is Added to the Menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    }

    return (
        <div>
            <SectionTitle heading="Add An Item" subHeading="What's New?"></SectionTitle>

            <div >
                <form onSubmit={handleSubmit(onSubmit)} className='w-full' >

                    <div className='form-control w-full my-6 	'>

                        <label className='label'>
                            <span className='label-text'>Recipe Name:</span>
                        </label>
                        <input type="text" required  {...register('name')} placeholder="Name" className="input input-bordered input-primary w-full " />

                    </div>

                    <div className='flex'>
                        {/* category */}
                        <div className='w-1/2 form-control'>
                            <label className='label'>
                                <span className='label-text'>Food Item</span>
                            </label>

                            <select defaultValue='default' {...register("category")} required className="select select-warning w-11/12 ">
                                <option disabled value="default">Select A Food Item</option>
                                <option value='salad'>Salad</option>
                                <option value='pizza'>Pizza</option>
                                <option value='soup'>Soup</option>
                                <option value='dessert'>Dessert</option>
                                <option value='drinks'>Drinks</option>
                            </select>
                        </div>

                        {/* price */}

                        <div className='form-control w-1/2 	'>

                            <label className='label'>
                                <span className='label-text'>Price</span>
                            </label>
                            <input type="Number"  required {...register("price")} placeholder="price" className="input input-bordered input-accent w-full " />

                        </div>
                    </div>

                    <div className='w-full form-control'>
                        <label className='label'>
                            <span className='label-text'>Recipe Details</span>
                        </label>
                        <textarea  {...register("recpie")} required className="textarea textarea-error w-full h-[200px]" placeholder="Recipe Details"></textarea>
                    </div>

                    <div className='pt-4 pb-4 form-control'>
                        <input type="file" {...register('image')} required className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
                    </div>
                   <button className='btn bg-emerald-300 hover:bg-emerald-900	hover:text-white	'>Add Item <FaUtensils></FaUtensils> </button>
                </form>
            </div>
        </div>
    )
}

export default AddItems
