import { useContext } from 'react';
import React from "react";
import './Label.css'
import { MyContext } from '../pages/HomepageCls';
import { MyContext2 } from '../pages/HomepageCls';
function Label(props){
    console.log("RENDER LABEL");
    const val = useContext(MyContext)
    const val2 = useContext(MyContext2)
    // console.log(val2);
    

    const style = props.isActive ? {backgroundColor:"green"} : {backgroundColor : "orange"}
    
    if(val === false){
        return null
    }

    return(  
    <span 
    onClick={()=>props.onAction(props.isActive?'active':'nonactive')}
    className="label-list" style={style}>{props.isActive?'Active':'Non-Active'}
    </span>
    )
}
export default Label


// class Label extends React.Component{
//     render(){
//         if(MyContext)
//         const props = this.props
//         const style = props.isActive ? {backgroundColor:"green"} : {backgroundColor : "orange"}

//         return  <span onClick={()=>props.onAction(props.isActive?'active':'nonactive')}
//          className="label-list" style={style}>{props.isActive?'Active':'Non-Active'}</span>
//     }
// }

// export default Label