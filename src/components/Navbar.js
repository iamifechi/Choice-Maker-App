import React from 'react'
import Header from './Header'

function Navbar(props){
    let styles={
          position:"absolute",top:0,left:0
        }
    return(
      <div style={styles}>
        <Header/>
      </div>
      
    )
}

export default Navbar