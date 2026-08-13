import React, { memo } from 'react'

const Child = (fun) => {
    console.log("hehehhehe");

    
  return (
    <div>Child</div>
  )
}

export default memo(Child)