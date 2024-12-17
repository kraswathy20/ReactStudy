import React from "react";
import Addnew from "./Addnew";
import './Tools.css'
class Tools extends React.Component{
    render(){
        const{
            children,
            onAction,
            labelValue,
            addnew
        }= this.props
        
        
        
        const onlychild=React.Children.only(children)
        const count = React.Children.count(onlychild.props.children)
        return (
            <div className="list-tools">

                <div className="list-header">
                    <select value={labelValue} onChange={onAction} name="status">
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="nonactive">Non-Active</option>
                    </select>
                </div>
                <Addnew addnew={addnew}/>
                {children}
                <div className="list-footer">
                   Total {count} items
                </div>
            </div>
        )
    }
}

export default Tools