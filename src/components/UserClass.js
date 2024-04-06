import React from "react";
import userContext  from "./userContext";
class UserClass extends React.Component{
    constructor(props){
        super(props);
       
       this.state={
        count:0,
        count2:1
       }
    }
    componentDidMount(){
        this.timer=setInterval(()=>{
            console.log('timer')
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        
        const {name,loginId,img}=this.props.data;
        console.log(this.props);
        const {count,count2}=this.state;    
        return (
          <div className="px-auto py-4 m-2 ">
            <div className="text-center">
                About us page
            </div>
            <div className="bg-gray-300 w-4/12 mx-auto rounded-xl">
               <div className="mx-auto w-40"> <img  className='rounded-lg'src={img}></img></div>
                <div className="m-4 font-bold">
                <h1 className=""> name: {name}</h1>
                <h1>username: {loginId}</h1>
                </div>
            </div>
          </div>

        )
    }
}
export default UserClass;