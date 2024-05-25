import React from 'react'
import useAuth from '../../../hooks/useAuth'
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';

function FoodCart({ item }) {

    const { name, recipe, image, category, price,_id } = item
    
    const { user } = useAuth();

    const axioSecure = useAxiosSecure();
    const   [cart,refetch] = useCart()

    const handleAddtoCart =(foodItem) =>{
        console.log(foodItem);
        const cartItem ={
            menuId:_id,
            email:user.email,
            name,
            price,
            image,

        }

        axioSecure.post('/carts',cartItem)
        .then(res =>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} Added to your Cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
        })
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt={name} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                        <p>Recipe: {recipe}</p>
                    <div className="flex">
                        <p className='ps-1 pe-4'>Category: {category}</p>
                        <p className='text-yellow-600 font-medium	'>Price: ${price}</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={()=>handleAddtoCart(item)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCart
