import React from 'react'
import useAuth from '../../../hooks/useAuth'

function FoodCart({ item }) {

    const { name, recipe, image, category, price,_id } = item
    
    const {user } = useAuth()

    const handleAddtoCart =(foodItem) =>{
        console.log(foodItem);
        
        //TODO: Send cart item to the database
        const cartItem ={
            menuId:_id,
            email:user.email,
            name,
            price,
            image,
                
        }
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
