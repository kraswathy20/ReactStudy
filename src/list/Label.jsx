import React from "react";
import './Label.css'


class Label extends React.Component{
    render(){
        const props = this.props
        const style = props.isActive ? {backgroundColor:"green"} : {backgroundColor : "orange"}

        return  <span onClick={props.onAct} className="label-list" style={style}>{props.isActive?'Active':'Non-Active'}</span>
    }
}

export default Label