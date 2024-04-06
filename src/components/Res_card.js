import { useCallback, useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "./userContext";
const Res_Card=(props)=>{
    const {resData}=props
    const {loggedInUser}=useContext(userContext);
      return (
          <div className="res-card m-4 p-4 w-[200px] bg-gray-200 rounded-lg hover:bg-gray-400">
                  
                  <img alt='res-logo'src={CDN_URL+resData.info.cloudinaryImageId} className="rounded-lg"></img>
                  <h1 className="font-bold text-lg py-2">{resData.info.name}</h1>
                 <div> <h2>{resData.info.cuisines.join(',')}</h2></div>
                  <h2>{resData.info.costForTwo}</h2>
                  <h2>{resData.info.avgRating}</h2>
                  <h2>{resData.info.sla.deliveryTime }mins</h2>
                  <h2>user: {loggedInUser}</h2>
              </div>
      )
  }
  export default Res_Card;