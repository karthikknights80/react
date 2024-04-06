import Res_Card from "./Res_card";
import { useContext, useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "./userContext";
 const Body=()=>{
     const [resList,setResList]=useState([]);
     const [filteredResList,setfilteredResList]=useState([]);
     const [searchText,setSearchText]=useState(''); 
     const onlineStatus=useOnlineStatus();
     const {setUserName,loggedInUser}=useContext(userContext);
     useEffect(()=>{
        fetch_function()
     },[]);
     const fetch_function=async ()=>{
      const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.99580&lng=79.57820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      let json=await data.json();
      json=json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants ;
      // json=(json.map((res)=>res.card.card));
      console.log(json)
      setResList(json);
      setfilteredResList(json);
     }
     if(resList.length===0)
     {
      console.log('loading')
      return <Shimmer/>
      
     }
    
     if(!onlineStatus){
      return (
         <div>
            <h1>
               you are offline
            </h1>
         </div>
      )
     }
   
    return(<div className="body-container">
        <div className="search flex mb-2 p-4 items-center">
            <input className="search-box border border-black border-solid h-7 rounded-lg" type="text" value={searchText} onChange={(e)=>{
               setSearchText(e.target.value);
            }} >
            </input>
            <button className="px-2 py-2 bg-green-200 ml-2 rounded-lg" onClick={()=>{
              const filteredRestuarnt=resList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setfilteredResList(filteredRestuarnt);
            }}>
               search
            </button>
           <button className="filter-btn px-2 py-2 bg-green-200 ml-2 rounded-lg" onClick={()=>{
            const filterList=resList.filter((res)=>res.info.avgRating>4);
            {console.log(filterList)}
            setfilteredResList(filterList);
           }}>
            Top rated resturants
           </button>
           <label className="ml-6">user : </label>
           <input className=" ml-2 p-1 border border-black" value={loggedInUser} onChange={(e)=>{
            setUserName(e.target.value);
           }} ></input>
        </div>
        <div className="res-container flex flex-wrap">
           {
            // console.log(resList[0].card.card.info.id)
           }
           {
            filteredResList.map((res)=>(<Link to={'/Restaurants/'+res.info.id} key={res.info.id}><Res_Card key={res.info.id}resData={res}/></Link>))
           }
           
        </div>
    </div>);
}
export default Body;