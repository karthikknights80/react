import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemsContainer=({data})=>{
    const dispatch=useDispatch();
    const handleCart=(item)=>{
        dispatch(addItems(item))
    }
    return (<div className="">
            {data.map((item)=>
           <div className="border-gray-300 border-b-2 py-2 my-4  flex justify-between bg-slate-100 rounded-lg shadow-lg">
            <div key={item.card.info.id} className="ml-2 text-left"  > 
            <h2 className="text-sm font-bold">{item.card.info.name}</h2>
            <h2>{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</h2>
            <p>{ item.card.info.description}</p>
            </div>
            <div >
                <span className="absolute bg-gray-500 rounded-lg p-2 text-white cursor-pointer" onClick={()=>handleCart(item)}>ADD+</span>
                <img className='w-[200px] rounded-lg shadow-lg'src={CDN_URL+item.card.info.imageId}></img>
                </div>
            </div>
            )}
        </div>
            
    )
}
export default ItemsContainer;