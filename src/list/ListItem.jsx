import React from "react"
import Label from "./Label"
import './ListItem.css'


function ListItem({title,descr,isActive}){
    return(
        <div className="list-item">
          
           <div className="list-title">
              <h4>{title}</h4>
           </div>
           <div className="list-descr">
              {descr}
           </div>
           <div className="list-label">
              <Label onAct={()=>console.log("parent clicked")} isActive={isActive}/>
              
           </div>
          
        </div>
    )
}

export default ListItem