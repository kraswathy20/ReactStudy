import React from "react"
import ListItem from "./ListItem"
import Tools from "../components/Tools"

const arr = [{
    title: "Appointment for October",
    description : "Interview rescheduled to October",
    isActive : true
 },
 {
    title: "Appointment for November",
    description : "Interview rescheduled to November",
    isActive : true
 },
{
    title: "Appointment for December",
    description : "Interview rescheduled to December",
    isActive : false
 }]

class List extends React.Component{
    // State initialization
   constructor(props){
    super(props);
    this.state={
        data : arr
    }
   }
    
    onListChange =(evt)=>{
        console.log(evt.target.value);
        const value = evt.target.value
        const newList = arr.filter((item)=>{
            if(value === 'all'){
                return true
            }
            else if(value === 'active'){
                return item.isActive === true;
            }
            else if(value === 'nonactive'){
                return item.isActive === false;
            }
            return false
            
        })
        console.log(newList);
       this.setState({
        data : newList
       })
    }

    render(){
        return(
            <Tools onAction={this.onListChange}>
            <div className="app-list">
                {
                    this.state.data.map((obj)=>{
                        return   <ListItem key={obj.title} title={obj.title} descr={obj.description} isActive={obj.isActive}/>

                    })
                }
             </div>
             </Tools>
        )
    }
}

export default List