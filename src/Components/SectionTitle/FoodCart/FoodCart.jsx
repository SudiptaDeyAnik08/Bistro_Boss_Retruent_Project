import React from 'react'

function FoodCart({ item }) {

    const { name, recipe, image, category, price } = item

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
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCart
