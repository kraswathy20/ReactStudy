import React from "react"
import Tools from "../components/Tools"
import SimpleList from "./SimpleList";



class List extends React.Component{
    // State initialization
   constructor(props){
    super(props);
    this.state={
        data : [],
        activeState : 'all'
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
            <Tools labelValue={activeState} onAction={this.onListChange} addnew={this.handleAdd}>
                <SimpleList data={newList} onAction={this.handleDelete} labelClick={this.handleLableClick}/>
             </Tools>
        )
    }
}

export default List