import React, { useState } from 'react'
import useCart from '../../../hooks/useCart'
import Table from '../Table/Table';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

function Cart() {
  const [cart,refetch ] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  
  const axioSecure =useAxiosSecure();

  const [deleteItemId,setDeleteItem] = useState([]);
  console.log(deleteItemId)

  axioSecure.delete(`/carts/${deleteItemId}`)
  .then(res =>{
    console.log(res);
    if(res.data.deletedCount > 0){
      refetch();
    }
  })

  return (
    <div>
      <div className='flex justify-evenly'>
        <h2 className="text-4xl">Items: {cart.length}</h2>
        <h2 className="text-4xl">Total Price: ${totalPrice}</h2>
        <button className='btn btn-primary font-bold	'>Pay</button>
      </div>

      <div className='pt-5' >

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th># </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
           
        {
          cart.map((res, index) =>
            <Table key={res.id} index={index}  data={res}  setDeleteItem={setDeleteItem}></Table>
          )
        }

          </table>
        </div>




      </div>
    </div>
  )
}

export default Cart
