import React from "react";
import './Addnew.css'
class AddNew extends React.Component{
    
  constructor(props){
    super(props);
    this.state={
      titleInput : '',
        descInput : '',
        isActiveInp : false
    }
  }

  handleChange = (evt) =>{
  const value = evt.target.value;
  this.setState({
    titleInput : value,
  })
  }

  handleClick = () =>{
    console.log(this.state);
    const{
      titleInput,
      descInput,
      isActiveInp
    }=this.state

     if(descInput){ 
    this.props.addnew({
      title: titleInput,
      description:descInput,
      isActive:isActiveInp
    });
 
    this.setState({
      titleInput: '',
      descInput:'',
      isActiveInp:false
    })
  }
  }
  handledescr = (evt) =>{
const value = evt.target.value;
this.setState({
    descInput: value
})
  }

  handleCheck = (evt) =>{
    const checked = evt.target.checked;
    this.setState({
        isActiveInp :checked
    })
  }

   
    render(){
       
        
        return(
            <div>
                <label className="inptitle">Title :</label>
            <input  value={this.state.titleInput} onChange={this.handleChange} className="title" type="text" />
            <label className="inptitle">Description :</label>
            <input value={this.state.descInput} onChange={this.handledescr} className="descr" type="text" />
            <label className="inptitle">isActive :</label>
            <input checked={this.state.isActiveInp} onChange={this.handleCheck} className="check" type="checkbox" />
            <button onClick={this.handleClick} className="btn">Add New</button>
            </div>
        )
    }
}

export default AddNew