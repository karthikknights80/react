import UserClass from "./UserClass"
import {useState,useEffect} from 'react'
const About=()=>{
  const [userInfo,setUserInfo]=useState({name:'undefined',loginId:'undefined',img:"undefined"});
  useEffect(()=>{
    fetchUserData();
  },[])
  const fetchUserData=async ()=>{
    const data=await fetch('https://api.github.com/users/karthikknights80');
    const json= await data.json();
    console.log(json);
    setUserInfo({name:json.name,loginId:json.login,img:json.avatar_url})
  }
    return (
      <UserClass data={userInfo}/>
    )
     
}
export default About