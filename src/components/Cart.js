import { useDispatch, useSelector } from "react-redux";
import ItemsContainer from "./ItemsContainer";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClear=()=>{
        dispatch(clearCart());
    }
    return (
        <div className="text-center w-6/12 m-auto">
            <h1 className="font-bold text-lg">
                cart page
            </h1>
            <div className="flex justify-end"><button className="text-white bg-black rounded-lg  p-2 m-2 " onClick={()=>handleClear()}>Clear Cart</button></div>
            <ItemsContainer data={cartItems}></ItemsContainer>
        </div>
    )
}
export default Cart;