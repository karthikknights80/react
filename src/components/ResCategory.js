
import { useState } from "react";
import ItemsContainer from "./ItemsContainer";
const ResCatogory=({cat,showIndex,index,clickIndex,setShowIndex})=>{
    const handleClick=()=>{
      clickIndex===null ?  setShowIndex(index) : setShowIndex(null);
    }
    return (
        <div className='p-2 m-4 shadow-lg border-b-2' >
        <div className="font-bold my-2 py-2 flex justify-between bg-slate-300 rounded-lg shadow-lg cursor-pointer" onClick={()=>{
            handleClick();
        }}>
        <div className="ml-2">
        {`${cat?.card.card.title} (${cat?.card.card.itemCards.length })`}
        </div>
        <div className="pr-2">
        🔽
        </div>

            </div>
      {showIndex &&  <ItemsContainer data={cat?.card.card.itemCards}/>}
        </div>
    )
}
export default ResCatogory;