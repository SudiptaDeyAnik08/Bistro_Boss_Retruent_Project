import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

function Table({ data,index ,setDeleteItem}) {
    const handelDelete = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              setDeleteItem(id);
            }
          });
    }
    return (
        
            <tbody>
                {/* row 1 */}
                <tr>
                    <th>
                       {index +1}
                    </th>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={data.image} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            
                        </div>
                    </td>
                    <td>
                    {data.name}                       
                    </td>
                    <td>$ {data.price}</td>
                    <th>
                        <button onClick={()=>handelDelete(data._id)} className="btn btn-ghost btn-xs ">
                        <FaTrashAlt className='text-red-600 text-xl'/>

                        </button>
                    </th>
                </tr>

            </tbody>


    
    )
}

export default Table
