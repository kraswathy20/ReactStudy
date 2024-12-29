import React from 'react'

function JustInfo({showLabel ,testValue}) {
  console.log("RENDER JUSTINFO");
  
  return (
    <div>JustInfo {showLabel} {testValue.activeState} </div>
  )
}


export default React.memo(JustInfo);