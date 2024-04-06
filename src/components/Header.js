import { useContext, useState } from 'react';
import {LOGO_URL} from './../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from './userContext';
import { UseSelector, useSelector } from 'react-redux';
const Header=()=>{
    const [btnName,setBtnName]=useState('login');
    const onlineStatus=useOnlineStatus();
    const {loggedInUser}=useContext(userContext)
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems)
    return (
        <div className="flex justify-between bg-slate-400 shadow-lg mb-2  h-40 ">
            <div className="logo-container ">
                <Link to={'/'}>
                <img className="logo w-56 h-15 " src={LOGO_URL}></img>
                </Link>
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>

                    <li className='m-4'>
                     online Status : {onlineStatus===true ? '👍':'👎'}
                    </li>
                    <li className='m-4'>
                      <Link to={'/'}>home</Link>  
                    </li>
                    <li className='m-4'>
                      <Link to={'/about'}>About</Link>  
                    </li>
                    <li className='m-4'>
                      <Link to={'/contact'}>Contact</Link>  
                    </li>
                    <li className='m-4'>
                      <Link to={'/groceries'}>Groceries</Link>  
                    </li>
                   
                    <li className='m-4 font-bold text-lg  '>
                    <Link to={'/cart'}>cart-({cartItems.length} items)</Link>  
                        
                    </li>
                   <button className='login-btn' onClick={()=>{
                    btnName=='login' ? setBtnName('logout') : setBtnName('login');
                   }}>
                    {btnName}
                   </button>
                   <li className='m-4 font-bold'>
                        {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>  
    )
}
export default Header;