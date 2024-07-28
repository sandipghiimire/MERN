import React, { useState } from 'react'
import "../App.css"

const Drayer = () => {
    const [drayera, setDrayera] = useState(false)
    const handleClick = () => setDrayera(!drayera);
    
  return (
    <div>
      {drayera ? (
        <div style={{width:'0px' , height:'500px', border:'Solid', color:'red'}} className="container1" onClick={handleClick}>
        Drayer</div>
      ) : (
        <div style={{width:'400px' , height:'500px', border:'Solid', color:'red'}} className="container2" onClick={handleClick}>
        Drayer</div>
      )}
    </div>
  )
}

export default Drayer
// one