import React, { useState } from "react"
import Tools from "../components/Tools"
import SimpleList from "../list/SimpleList";

const MyContext = React.createContext()
const MyContext2 = React.createContext(500)

class Homepage extends React.Component{
    // State initialization
   constructor(props){
    super(props);
    this.state={
        data : [],
        activeState : 'all',
        message : '',
        showLabel : true
    }
   }

    
componentDidMount(){
    console.log("componentDidMount");
   fetch('/data.json')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        this.setState({
            data : data
        })
    })
    
}

componentDidUpdate(prevProps,prevState){
    if(prevState.message !== this.state.message){
    console.log("componentDidUpdate");
    this.setState({
        message: 'message me'
    })
}
}

componentWillUnmount(){
    console.log("componentWillUnmount");
    
}
    
    onListChange =(evt)=>{
        console.log(evt.target.value);
        const value = evt.target.value
    //    
    //     console.log(newList);
    //    this.setState({
    //     data : newList
    //    })

        this.setState({
            activeState:value
        })
    }

    handleDelete = (item) =>{
        console.log("Delete",item);
        const newList = this.state.data.filter((element)=>element.id !== item.id)
        this.setState({
            data:newList
        })
    }

    handleLableClick = (arg) =>{
        this.setState({
            activeState: arg
        })
    }

    handleAdd=(item) =>{
        console.log(this.state.data);
        console.log(item);
        this.setState({
            data : [item, ...this.state.data]
        })
    }

    handleShow = (evt) =>{
        this.setState({
            showLabel : evt.target.checked
        })
    }

 
    render(){
        const{
            data,
            activeState
        }= this.state

         const newList = data.filter((item)=>{
            if(activeState === 'all'){
                return true
            }
            else if(activeState === 'active'){
                return item.isActive === true;
            }
            else if(activeState === 'nonactive'){
                return item.isActive === false;
            }
            return false
            
        })
        
        
        return(
            <div> 
               <input checked={this.state.showLabel} onClick={this.handleShow} type="checkbox" id="show"  style={{marginLeft:'10px',marginTop:'5px'}}/>
               <label htmlFor="show"> Show Label</label>
               <MyContext2.Provider value={100}>
               <MyContext.Provider value={this.state.showLabel}>
                <Tools labelValue={activeState} onAction={this.onListChange} addnew={this.handleAdd}>
                    <SimpleList data={newList} onAction={this.handleDelete} labelClick={this.handleLableClick}/>
                </Tools>
             </MyContext.Provider>
             </MyContext2.Provider>
            </div>
        )
    }
}

export default Homepage

export {
    MyContext,
    MyContext2
}