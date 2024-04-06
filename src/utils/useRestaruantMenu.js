import { useEffect, useState } from "react"
import { MENU_API } from "./constants";

const useResturauntMenu=(resId)=>{
    const [resData,setResData]=useState([]);
    useEffect(()=>{
        fetch_data();
    },[]);
  const fetch_data=async ()=>{
    const data=await fetch(MENU_API+resId+'&catalog_qa=undefined&submitAction=ENTER');
    let json=await data?.json
    setResData(json?.data)
  }
    return resData;
}
export default useResturauntMenu;