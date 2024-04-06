import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useResturauntMenu from "../utils/useRestaruantMenu";
import ResCatogory from "./ResCategory";

const ResMenu=()=>{
    const [clickIndex,setClickIndex]=useState(null);
    const [resInfo,setResInfo]=useState([]);
    const {resId}=useParams();
    useEffect(()=>{
        fetch_items()
    },[]);
    const  fetch_items=async()=>{
        const data=await fetch(MENU_API+resId+'&catalog_qa=undefined&submitAction=ENTER');
        let json=await data.json();
        
        setResInfo(json?.data);
        // console.log('resinfo');       
        // console.log(json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);       
    }
    if(resInfo.length===0){
        return <Shimmer/>    }
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
   
  const itemcategories=  resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card)=>(card?.card.card?.['@type'])==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
  const HeadClicked=()=>{
    setClick(!click);
    console.log(click);
  }
    return (
        <div className="text-center px-60">
            <h1 className="font-bold text-xl py-3">{name}</h1>
            <h2>
                cuisines-{cuisines.join(',')}
            </h2>
            <h2>{costForTwoMessage}</h2>
            <h3> items</h3>
            <div className='text-left'>
            {itemcategories.map((cat,index)=><ResCatogory 
            cat={cat} 
            showIndex={index === clickIndex}
            clickIndex={clickIndex}
            index={index}
            setShowIndex={(x)=>{
                setClickIndex(x)}}/>)}
            </div>
        </div>
    )
}
export default ResMenu;