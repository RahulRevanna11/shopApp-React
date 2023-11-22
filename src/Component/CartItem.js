import React from 'react'
import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from 'react-redux';
import {remove} from "../redux/Slices/CartSlice";
const CartItem=({item})=>
{
    const dispatch=useDispatch();
      console.log("inside cartitem");
      console.log(item);

    function removeFromCart()
    {
           dispatch(remove(item.id));
           
    }
    // console.log(item.description);
    return (
        <div className='flex  items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5  '>
           <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center ml-20 mr-50 border-b-4 border-black" >
                <div className='h-[180px] w-[300px]'>
                    <img  src={item.image} alt="img"  className='h-full w-full' />
                </div>
               
                 <div>
                    <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
                       <h1 className="text-xl text-slate-700 font-semibold">{item.title} </h1>
                       <h1 className="text-base text-slate-700 font-medium">{item.description}</h1> 
                    </div>
                   
                    <div className="flex items-center justify-between ">
                        <p className="font-bold text-lg text-green-600"> ${item.price}</p>
                        <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3" onClick={removeFromCart}><FcDeleteDatabase/></div>
                    </div>
               </div>


            
               </div>
        </div>

    );
}


export default CartItem;
