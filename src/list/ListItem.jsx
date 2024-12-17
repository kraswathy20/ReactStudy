import React from "react"
import Label from "./Label"
import './ListItem.css'


function ListItem({title,descr,isActive,onDelete,labelClick}){
    return(
        <div className="list-item">
          
           <div className="list-title">
              <h4>{title}</h4>
              <label onClick={onDelete}>Delete</label>
           </div>
           <div className="list-descr">
              {descr}
           </div>
           <div className="list-label">
              <Label onAction={labelClick} isActive={isActive}/>
              
           </div>
          
        </div>
    )
}

export default ListItem