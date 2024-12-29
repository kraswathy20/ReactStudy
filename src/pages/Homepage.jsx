import React,{useCallback, useEffect, useMemo, useState} from "react"
import Tools from "../components/Tools"
import SimpleList from "../list/SimpleList";
import JustInfo from "./JustInfo";
const MyContext = React.createContext()
const MyContext2 = React.createContext(500)

function Homepage(){
 const [data,setData] = useState([]);
 const [activeState,setActiveState] = useState('all');
 const [showLabel, setShowLabel] = useState(true)

 useEffect(()=>{
    fetch('/data.json')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        setData(data)
    })
 },[]);


const onListChange =(evt)=>{
    console.log(evt.target.value);
    const value = evt.target.value 
    setActiveState(value)
}

const handleDelete = (item) =>{
    console.log("Delete",item);
    const newList = data.filter((element)=>element.id !== item.id)
    setData(newList)
}

const handleLableClick = (arg) =>{
    setActiveState(arg)
}

const handleAdd=(item) =>{
    console.log(data);
    console.log(item);
    setData([item, ...this.state.data]
)
}

const handleShow = (evt) =>{
    setShowLabel(evt.target.checked)
}

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

// const value = {
//     key : 'home'
// }
// const value = useMemo(()=>{
// return {
//         key : 'home',
//         activeState : activeState
//     }
// },[activeState])

// const handleClick =() =>{
//     console.log("Clicked");
// }
const handleClick =  useCallback(
     () =>{
    console.log("Clicked");
},[])
 return(
    <div> 
    <input checked={showLabel} onClick={handleShow} type="checkbox" id="show"  style={{marginLeft:'10px',marginTop:'5px'}}/>
    <label htmlFor="show"> Show Label</label>
    <MyContext2.Provider value={100}>
    <MyContext.Provider value={showLabel}>
     <Tools labelValue={activeState} onAction={onListChange} addnew={handleAdd}>
         <SimpleList data={newList} onAction={handleDelete} labelClick={handleLableClick}/>
     </Tools>
  <JustInfo onClick={handleClick} showLabel={showLabel}/>
  </MyContext.Provider>
  </MyContext2.Provider>
 </div>

 )
}

export default Homepage

export {
    MyContext,
    MyContext2
}