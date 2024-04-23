import React from 'react'

function MenuItem({ item,titleMethod }) {
    const { name, recipe, image, category, price } = item;
    

    
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius:"0 200px 200px 200px"}} src={image} alt="" className='w-[120px]' />
            <div>
                <h1 className="uppercase">{name}------------</h1>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    )
}

export default MenuItem
