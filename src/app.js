import React ,{lazy,Suspense, useEffect, useState}from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import Header from "./components/Header"
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import ResMenu from "./components/ResMenu"
import userContext from "./components/userContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"
const Groceries=lazy(()=>import('./components/Groceries'));
const AppLayout=()=>{
    const [userName,setUserName]=useState(null);
    useEffect(()=>{
        const data={
            name:'karthik'
        }
        setUserName(data.name);
    },[])
    return (
        <div className="app-container">
           <Provider store={appStore}>
           <userContext.Provider value={{loggedInUser:userName,setUserName}}>
                <Header/>
                    <Outlet/>
           </userContext.Provider>
           </Provider>
           
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/groceries',
                element:<Suspense><Groceries/></Suspense>
            },
            {
                path:'/Restaurants/:resId',
                element:<ResMenu/>
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ],
        errorElement:<Error />
    },
   
])
const root=ReactDOM.createRoot(document.getElementById('root'));
 

root.render(<RouterProvider router={appRouter }/>);