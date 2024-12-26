import React, { useState,useEffect } from 'react'
import './Usage.css'
function Usage() {
    const [counter,setCounter] = useState(0)
    const [color,setColor] = useState('white')
    const [boom,setBoom] = useState(false)

useEffect(()=>{
  setBoom(false)
  const id = setTimeout(()=>{
    setBoom(true)
  },counter * 1000);
  return () =>{
    clearTimeout(id)
  }
},[counter])
  return (
    <div className='usage' >
        
        <div className='usageItem' style={{backgroundColor : color}}>
        <button onClick={()=>{
          setCounter((state)=>{
            return state+1
          })
        }} className='cbtn'>increment</button>
        <label>Counter:{counter}</label>
        <button onClick={()=>{
          setCounter((state)=>{
            return state-1
          })
        }} className='cbtn'>decrement</button>
        </div>
        <button onClick={()=>setColor('blue')}>Blue</button>
        <button onClick={()=>setColor('green')}>green</button>
        {
          boom && counter ? (
           <div className='timebomb'>
          <span>Boom</span>
          </div>
          ) : null
        }
      
    </div>
    
  )
}

export default Usage