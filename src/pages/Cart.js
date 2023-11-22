import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../Component/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {

     const [totalAmount,setTotalAmount]=useState(0);
    const {cart}=useSelector((state)=>state);


    useEffect(()=>{
       setTotalAmount(cart.reduce(
        (acc,curr)=>acc+curr.price,0
       ))
    },[cart])
    return (
      <div>
        {
            cart.length===0 ?
            (<div>
                <h1> Cart Empty</h1>

                <Link  to="/">

                <button>
                    Shop Now
                </button>
                </Link>
            </div>) :


            (<div className="flex flex-row justify-space-around align-items-center">
             
               <div className="w-[60%] border-t-4 border-black">
               {
                cart.map((item,index)=>(
                    <CartItem key={item.id} item={item} itemIndex={index}/>
                ))
              }
                </div>

                <div className="flex flex-col h-full justify-space-around  ">
                  <div className="mb-[60vh]">
                    
                    <div className="text-green-700 text-5xl font-bold mt-5">Summary </div> 
                    <p className="mt-4 text-xl font-semibold">
                        <span> Total Items:{cart.length}</span>
                    </p>
                 </div>
 
                 <div>
                     <p className="mt-4 text-xl font-semibold ml-60" >Total Amount:{totalAmount}</p>
                     <button className="bg-green-600 text-xl font-semibold mt-4  py-2 px-16 text-white rounded-xl">
                         Checkout Now
                     </button>
                     
                 </div>
                </div>


            </div>)
        }

      </div>
    );
  };
  
  export default Cart;