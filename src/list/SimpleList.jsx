import React from 'react'
import ListItem from "./ListItem"

function SimpleList(props) {
    const{
        data,
        onAction,
        labelClick
    }=props;
  return (
    <div className="app-list">
    {
        data.map((obj)=>{
            return   <ListItem
             key={obj.title}
             title={obj.title}
             descr={obj.description} 
             isActive={obj.isActive}
             onDelete={()=>onAction(obj)}
             labelClick={labelClick}
             />
        })
    }
 </div>
  )
}

export default SimpleList